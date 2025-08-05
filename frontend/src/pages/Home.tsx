import TopNav from "../components/TopNav";
import LocationGrid from "../components/LocationGrid";
import CityTabs from "../components/CityTabs";
import EmailSignup from "../components/EmailSignup";
import Footer from "../components/Footer";
import EmailPopup from "../components/EmailPopup";
import { useEffect, useState } from "react";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // cleanup if component unmounts
  }, []);

  return (
    <div className="bg-white min-h-screen max-w-screen text-light font-sans">
      <div className="relative w-full h-full overflow-hidden">
        {/* Background image behind nav */}
        <img src="/assets/hp-bench-with-tv.png" alt="Bench with TV" className="w-full h-full object-cover" />
        <div className="fixed top-20 left-0 w-full">
          <TopNav />
          <hr className="w-11/12 m-auto h-px bg-light"></hr>
        </div>
      </div>
      <CityTabs />
      <LocationGrid />
      <EmailSignup />
      <Footer />
      {showPopup && <EmailPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Home;
