import TopNav from "../components/TopNav";
import LocationGrid from "../components/LocationGrid";
import CityTabs from "../components/CityTabs";
import EmailSignup from "../components/EmailSignup";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-white min-h-screen max-w-screen text-light font-sans">
      
      <div className="relative w-full h-full overflow-hidden">
        {/* Background image behind nav */}
        <img src="/assets/hp-bench-with-tv.png" alt="Bench with TV" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full">
          <TopNav />
          <hr className="w-11/12 m-auto h-px bg-light"></hr>
        </div>
      </div>
      <CityTabs />
      <LocationGrid />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Home;
