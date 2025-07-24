import React from "react";
import Home from "./pages/Home.tsx";
import PasswordPage from "./pages/PasswordPage.tsx";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./pages/MainLayout";

const ProtectedRoute = ({ authenticated, children }: { authenticated: boolean; children: React.ReactNode }) => {
  return authenticated ? <>{children}</> : <Navigate to="/" replace />;
};

const App: React.FC = () => {
  const [authenticated, setAuthenticated] = React.useState(false);

  return (
    <Router>
      <Routes>
        {/* Password route */}
        <Route path="/" element={<PasswordPage onSuccess={() => setAuthenticated(true)} />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute authenticated={authenticated}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute authenticated={authenticated}>
              <MainLayout current="about" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/faq"
          element={
            <ProtectedRoute authenticated={authenticated}>
              <MainLayout current="faq" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute authenticated={authenticated}>
              <MainLayout current="login" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute authenticated={authenticated}>
              <MainLayout current="register" />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
  // const [enteredPassword, setEnteredPassword] = React.useState("");
  // const [isAuthorized, setIsAuthorized] = React.useState(false);
  // const [error, setError] = React.useState("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (enteredPassword === password) {
  //     setIsAuthorized(true);
  //     setError("");
  //   } else {
  //     setError("Incorrect password. Try again.");
  //   }
  // };

  // if (!isAuthorized) {
  //   return (
  //     <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-deepRed text-light">
  //       <h1 className="text-xl mb-2">Enter Password</h1>
  //       <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
  //         <input
  //           type="password"
  //           className="p-2 rounded text-dark bg-light"
  //           value={enteredPassword}
  //           onChange={(e) => setEnteredPassword(e.target.value)}
  //           placeholder="Password"
  //         />
  //         <button
  //           type="submit"
  //           className="bg-light text-deepRed px-4 py-2 rounded font-semibold"
  //         >
  //           Enter
  //         </button>
  //         {error && <p className="text-brightRed">{error}</p>}
  //       </form>
  //     </div>
  //   );
  // }

  // return(
  //   <div className="bg-deepRed min-h-screen w-screen text-light">
  //     <div className="flex flex-col items-center pt-8 space-y-4">
  //       <img src="/assets/1-mainlogo.png" alt="Main Logo 1" className="h-20 -mb-6" />
  //       <img src="/assets/13-logomark.png" alt="Main Logo Mark 1" className="h-20" />
  //     </div>

  //     <div className="flex gap-4 mt-6 justify-center">
  //       <button className="px-4 py-2 hover:border-deepRed hover:text-darkBlue">
  //         Home
  //       </button>
  //       <button className="px-4 py-2 hover:border-deepRed hover:text-darkBlue">
  //         About
  //       </button>
  //       <button className="px-4 py-2 hover:border-deepRed hover:text-darkBlue">
  //         FAQ
  //       </button>
  //     </div>

  //     <Home />
      
  //   </div>
  // );
};

export default App;
