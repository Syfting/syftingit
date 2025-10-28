import React from "react";
import Home from "./pages/Home.tsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import AccountSettingsPage from "./pages/AccountSettings.tsx";
// import BakerProfileMockup from "./pages/BakerProfileMockup.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
// import OrderPageMockup from "./pages/OrderPageMockup.tsx";
import PasswordPage from "./pages/PasswordPage.tsx";
import LaunchHomepage from "./pages/LaunchHomepage.tsx";

const ProtectedRoute = ({ authenticated, children }: { authenticated: boolean; children: React.ReactNode }) => {
  return authenticated ? <>{children}</> : <Navigate to="/" replace />;
};

const App: React.FC = () => {
  const [authenticated, setAuthenticated] = React.useState(false); 

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<MainLayout current="about" />} />
        <Route path="/faq" element={<MainLayout current="faq" />} />
        <Route path="/login" element={<MainLayout current="login" />} />
        <Route path="/register" element={<MainLayout current="register" />} />
        <Route path="/settings" element={<AccountSettingsPage />} />
        <Route path="/bakerprofilemockup" element={<BakerProfileMockup />} />
        <Route path="/orderpagemockup" element={<OrderPageMockup />} /> */}

        <Route path="/" element={<LaunchHomepage />} />

        {/* Password route */}
        <Route path="/PasswordPage" element={<PasswordPage onSuccess={() => setAuthenticated(true)} />} />

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
        <Route
          path="/settings"
          element={
            <ProtectedRoute authenticated={authenticated}>
              <AccountSettingsPage />
            </ProtectedRoute>
          }
        />
        {/* fallback if someone types a bad URL */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
