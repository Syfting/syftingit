import { Link } from "react-router-dom";
import { useLayoutEffect, useState } from "react";

const TopNav = () => {
  const [scrollY, setScrollY] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxScroll = 300;

  const opacity = Math.min(scrollY / maxScroll, 0.95);
  const scrolledEnough = scrollY > 70;

  const textColorClass = scrolledEnough ? "text-dark" : "text-light";

  return (
    <nav
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        // backdropFilter: "blur(8px)",
      }}
      className="fixed top-0 z-50 transition-all duration-300 flex items-center justify-between px-8 py-4 uppercase tracking-wide w-full"
    >

      {/* Left Nav */}
      <div className={`flex gap-40 flex-1 justify-start transition-colors duration-300 ${textColorClass}`}>
        <Link to="/home" className="hover:text-brightRed cursor-pointer">Home</Link>
        <span className="cursor-not-allowed hover:text-brightRed">Explore</span>
        <Link to="/about" className="hover:text-brightRed cursor-pointer">About</Link>
        {/* <Link to="/home" className={getLinkClass("/home")}>Home</Link>
        <Link to="/explore" className={getLinkClass("/explore")}>Explore</Link>
        <Link to="/about" className={getLinkClass("/about")}>About</Link> */}
      </div>

      {/* Center Logo */}
      <div className="flex-shrink-0">
        <Link to="/home">
          <img
            src={scrolledEnough ? "/assets/mainlogo-dark.png" : "/assets/mainlogo-light.png"}
            alt="Syfting Logo"
            className="h-12 mx-auto transition-all duration-300"
          />
        </Link>
      </div>

      {/* Right Nav */}
    <div className={`flex gap-40 mr-8 flex-1 justify-end transition-colors duration-300 ${textColorClass}`}>
        <span className="cursor-not-allowed hover:text-brightRed">Cart</span>
        <span className="cursor-not-allowed hover:text-brightRed">Login</span>
        {/* <Link to="/cart" className={getLinkClass("/cart")}>Cart</Link>
        <Link to="/login" className={getLinkClass("/login")}>Login</Link> */}
    </div>
    <div className="fixed top-20 left-0 w-full">
          <hr className="w-11/12 m-auto h-px bg-light"></hr>
        </div>
    </nav>
  );
};

export default TopNav;
