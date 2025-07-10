import React from "react";
import { useLocation, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import FAQ from "./FAQ";

const MainLayout: React.FC<{ current?: string }> = ({ current }) => {
  const path = useLocation().pathname;

  console.log(current ? "placeholder" : "no placeholder");

  const renderPage = () => {
    switch (path) {
      case "/home":
        return <Home />;
      case "/about":
        return <About />;
      case "/faq":
        return <FAQ />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-deepRed min-h-screen w-screen text-light">
      {/* Logo Images */}
      <div className="flex flex-col items-center pt-8 space-y-4">
        <img src="/assets/1-mainlogo.png" alt="Main Logo 1" className="h-20 -mb-6" />
        <img src="/assets/13-logomark.png" alt="Main Logo Mark 1" className="h-20" />
      </div>

      {/* Nav Buttons */}
      <div className="flex gap-4 mt-6 justify-center">
  <Link
    to="/home"
    className={`px-4 py-2 border rounded transition hover:border-deepRed hover:text-darkBlue ${
      path === "/home" ? "text-darkBlue border-deepRed" : "text-light border-deepRed"
    }`}
  >
    Home
  </Link>
  <Link
    to="/about"
    className={`px-4 py-2 border rounded transition hover:border-deepRed hover:text-darkBlue ${
      path === "/about" ? "text-darkBlue border-deepRed" : "text-light border-deepRed"
    }`}
  >
    About
  </Link>
  <Link
    to="/faq"
    className={`px-4 py-2 border rounded transition hover:border-deepRed hover:text-darkBlue ${
      path === "/faq" ? "text-darkBlue border-deepRed" : "text-light border-deepRed"
    }`}
  >
    FAQ
  </Link>
</div>

      {/* Page Content */}
      <div>{renderPage()}</div>
    </div>
  );
};

export default MainLayout;
