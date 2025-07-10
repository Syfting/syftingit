import React from "react";
import { Link, useLocation } from "react-router-dom";

// interface HealthResponse {
//   status: string;
// }

const Home: React.FC = () => {

const location = useLocation();
  const path = location.pathname;

  const getLinkClass = (target: string) =>
    `px-4 py-2 border rounded transition hover:border-deepRed hover:text-darkBlue ${
      path === target ? "text-darkBlue border-deepRed" : "text-light border-deepRed"
    }`;

  return (
    <div className="bg-deepRed min-h-screen w-screen text-light">
    {/* Logo Images */}
    <div className="flex flex-col items-center pt-8 space-y-4">
      <img src="./assets/1-mainlogo.png" alt="Main Logo 1" className="h-20 -mb-6" />
      <img src="./assets/13-logomark.png" alt="Main Logo Mark 1" className="h-20" />
    </div>

    {/* Nav Buttons */}
    <div className="flex gap-4 mt-6 justify-center">
      <Link to="/home" className={getLinkClass("/home")}>
        Home
      </Link>
      <Link to="/about" className={getLinkClass("/about")}>
        About
      </Link>
      <Link to="/faq" className={getLinkClass("/faq")}>
        FAQ
      </Link>
    </div>

    {/* Spinning Image and Text */}
    <div className="bg-deepRed text-light">
      <div className="pt-12 flex flex-col items-center space-y-6">
        <img
          src="./assets/19-badge2.png"
          alt="Spinning Logo"
          className="h-40 w-40 animate-spin [animation-duration:10s]"
        />
        <p className="text-2xl font-semibold">Coming Soon</p>
      </div>
    </div>
  </div>

    //   const [status, setStatus] = useState<string>("");
    //   useEffect(() => {
    //     fetch("http://localhost:8000/health")
    //       .then((response) => {
    //         if (!response.ok) {
    //           throw new Error("Network response was not ok");
    //         }
    //         return response.json() as Promise<HealthResponse>;
    //       })
    //       .then((data) => {
    //         setStatus(data.status);
    //       })
    //       .catch((error) => {
    //         console.error("Fetch error:", error);
    //         setStatus("Error fetching status");
    //       });
    //   }, []);

    //   {/* Health Status
    //   <div className="mt-8 text-center">
    //     <h1 className="text-3xl font-semibold mb-2">Backend Health Status:</h1>
    //     <p className={`text-xl ${status === "ok" ? "text-green-300" : "text-red-300"}`}>
    //       {status || "Checking..."}
    //     </p>
    //   </div> */}
    // </div>
  );
};

export default Home;
