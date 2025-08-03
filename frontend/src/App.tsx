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
};

export default App;
