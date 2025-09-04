import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLayoutEffect, useState, useEffect, useRef } from "react";
import LoginForm from "./LoginForm";

const TopNav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize login state from localStorage on mount (for page reload persistence)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  // Track scroll position
  useLayoutEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setShowDropdown(false);
    navigate("/home");
  };

  const maxScroll = 300;
  const opacity = Math.min(scrollY / maxScroll, 0.95);
  const scrolledEnough = scrollY > 70;

  // Navbar text color
  const textColorClass =
    location.pathname === "/settings" ? "text-deepRed" : scrolledEnough ? "text-deepRed" : "text-light";

  // Logo selection
  const logoSrc =
    location.pathname === "/settings"
      ? "/assets/mainlogo-dark.png"
      : scrolledEnough
      ? "/assets/mainlogo-dark.png"
      : "/assets/mainlogo-light.png";

  return (
    <div>
      <nav
        style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}
        className="fixed top-0 z-50 transition-all duration-300 flex items-center justify-between px-8 py-4 uppercase tracking-wide w-full"
      >
        {/* Left Nav */}
        <div
          className={`flex gap-40 flex-1 justify-start transition-colors duration-300 ${textColorClass}`}
        >
          <Link to="/home" className="hover:text-brightRed cursor-pointer">
            Home
          </Link>
          <span className="cursor-not-allowed hover:text-brightRed">Explore</span>
          <Link to="/about" className="hover:text-brightRed cursor-pointer">
            About
          </Link>
        </div>

        {/* Center Logo */}
        <div className="flex-shrink-0">
          <Link to="/home">
            <img
              src={logoSrc}
              alt="Syfting Logo"
              className="h-12 mx-auto transition-all duration-300"
            />
          </Link>
        </div>

        {/* Right Nav */}
        <div
          className={`flex gap-40 mr-8 flex-1 justify-end transition-colors duration-300 ${textColorClass}`}
        >
          <span className="cursor-not-allowed hover:text-brightRed">Cart</span>

          {!isLoggedIn ? (
            <span
              onClick={() => setShowLogin(true)}
              className="hover:text-brightRed cursor-pointer"
            >
              Login
            </span>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <span
                onClick={() => setShowDropdown((prev) => !prev)}
                className="hover:text-brightRed cursor-pointer"
              >
                Account
              </span>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg text-dark uppercase text-sm z-50">
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      navigate("/settings");
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Settings
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="fixed top-20 left-0 w-full">
          <hr className="w-11/12 m-auto h-px bg-light" />
        </div>
      </nav>

      {/* Login Popup */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-light text-light shadow-lg w-[75rem] h-[39.9rem] relative">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-4 text-deepRed text-xl"
            >
              ✕
            </button>
            <LoginForm
              onSuccess={() => {
                localStorage.setItem("token", "user_token"); // or your token
                setIsLoggedIn(true); // triggers re-render → shows Account immediately
                setShowLogin(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNav;
