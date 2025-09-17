import React from "react";
import Home from "./pages/Home.tsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import AccountSettingsPage from "./pages/AccountSettings.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<MainLayout current="about" />} />
        <Route path="/faq" element={<MainLayout current="faq" />} />
        <Route path="/login" element={<MainLayout current="login" />} />
        <Route path="/register" element={<MainLayout current="register" />} />
        <Route path="/settings" element={<AccountSettingsPage />} />
        {/* fallback if someone types a bad URL */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
