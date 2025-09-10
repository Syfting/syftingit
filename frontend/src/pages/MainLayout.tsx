import React from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import FAQ from "./FAQ";
import Login from "./Login";
import RegisterPage from "./Register";

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
      case "/login":
        return <Login />; 
      case "/register":
        return <RegisterPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-white min-h-screen max-w-screen text-light font-sans">
      {/* Page Content */}
      <div>{renderPage()}</div>
    </div>
  );
};

export default MainLayout;
