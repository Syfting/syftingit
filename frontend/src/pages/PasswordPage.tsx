import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PASSWORD = "syftingtrial1";

const PasswordPage: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      onSuccess(); // Let App.tsx know we're authenticated
      navigate("/home");
    } else {
      setError("Incorrect password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-deepRed text-light">
      <h1 className="text-2xl mb-4">Enter Password</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 rounded text-deepRed"
          placeholder="Password"
        />
        <button type="submit" className="bg-light text-deepRed px-4 py-2 rounded hover:bg-light">
          Enter
        </button>
        {error && <p className="text-brightRed mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default PasswordPage;
