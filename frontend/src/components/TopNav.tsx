import { Link, useLocation } from "react-router-dom";

const TopNav = () => {

    const path = useLocation().pathname;
    const getLinkClass = (target: string) =>
        `transition hover:text-darkBlue ${
        path === target ? "text-darkBlue font-semibold" : "text-light"
        }`;

    // const [bgOpacity, setBgOpacity] = useState(0);

    // useEffect(() => {
    //     const onScroll = () => {
    //     const scrollTop = window.scrollY;
    //     const opacity = Math.min(scrollTop / 200, 1);
    //     setBgOpacity(opacity);
    //     };

    //     window.addEventListener("scroll", onScroll);
    //     return () => window.removeEventListener("scroll", onScroll);
    // }, []);


  return (
    <nav
      className="sticky top-0 z-50 transition-colors duration-300 flex items-center justify-between ml-4 px-8 py-4 uppercase tracking-wide w-full"
    //   style={{ backgroundColor: `rgba(255, 255, 255, ${bgOpacity})` }}
    >
        {/* style={{ backgroundColor: `rgba(255, 255, 255, ${bgOpacity})` }} */}

      {/* Left Nav */}
      <div className="flex gap-40 flex-1 justify-start">
        <span className={getLinkClass("/home") + " cursor-not-allowed"}>Home</span>
        <span className={getLinkClass("/explore") + " cursor-not-allowed"}>Explore</span>
        <span className={getLinkClass("/about") + " cursor-not-allowed"}>About</span>
        {/* <Link to="/home" className={getLinkClass("/home")}>Home</Link>
        <Link to="/explore" className={getLinkClass("/explore")}>Explore</Link>
        <Link to="/about" className={getLinkClass("/about")}>About</Link> */}
      </div>

      {/* Center Logo */}
      <div className="flex-shrink-0">
        <Link to="/home">
          <img
            src="/assets/mainlogo-light.png"
            alt="Syfting Logo"
            className="h-12 mx-auto"
          />
        </Link>
      </div>

      {/* Right Nav */}
    <div className="flex gap-40 mr-8 flex-1 justify-end">
        <span className={getLinkClass("/cart") + " cursor-not-allowed"}>Cart</span>
        <span className={getLinkClass("/login") + " cursor-not-allowed"}>Login</span>
        {/* <Link to="/cart" className={getLinkClass("/cart")}>Cart</Link>
        <Link to="/login" className={getLinkClass("/login")}>Login</Link> */}
    </div>
    </nav>
  );
};

export default TopNav;
