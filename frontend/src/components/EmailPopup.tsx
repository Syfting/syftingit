import React, { useState, useEffect } from "react";
import axios from "axios";

interface EmailPopup {
  onClose: () => void;
}

const PopupModal: React.FC<EmailPopup> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      await axios.post(`${API_URL}/email-signup`, { email });
      setMessage("Successfully signed up!");
      setIsSuccess(true);
      setEmail("");

      // Trigger fade out after 5 seconds
      setTimeout(() => {
        setIsClosing(true);
      }, 5000);
    } catch (err: any) {
      console.error(err);
      setMessage(err.response?.data?.detail || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => onClose(), 500); // match CSS transition
      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black bg-opacity-50 flex flex-col justify-center items-center w-full transition-opacity duration-500 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Bright-red div */}
      <div className="relative bg-brightRed p-6 shadow-lg w-[63rem] h-1/3 flex items-center">
        <img
          src="/assets/27-badge2.png"
          alt="Badge"
          className="absolute top-4 -left-28 w-[22rem] h-auto rotate-[14deg] pointer-events-none z-[50]"
        />
        <img src="/assets/youre-so-sweet.png" alt="Cupcake" className="h-[20rem] mx-auto" />
      </div>

      {/* Light div */}
      <div className="relative bg-light p-6 shadow-lg w-[63rem] h-1/3 text-center">
        <img
          src="/assets/14-badge1.png"
          alt="Badge"
          className="absolute bottom-[4rem] -right-24 w-[16rem] h-auto -rotate-[18deg] pointer-events-none z-[50]"
        />

        <p className="mb-4 text-brightRed font-semibold text-[2rem]">Sign up today!</p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto mb-[4rem]"
        >
          <input
            type="email"
            placeholder="ILOVESYFTING@EMAIL.COM"
            className="w-full sm:w-2/3 p-2 text-dark uppercase border-b border-dark bg-transparent placeholder:text-dark focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSuccess}
          />
          <button
            type="submit"
            className="bg-brightRed text-light px-6 py-2 rounded-3xl"
            disabled={loading || isSuccess}
          >
            {loading ? "Signing up..." : "Get Syfting!"}
          </button>
        </form>

        {message && <p className="text-dark mt-2 font-semibold">{message}</p>}

        {!isSuccess && (
          <button
            className="mt-2 px-4 py-2 text-dark outline-none border border-dark rounded-3xl font-semibold"
            onClick={onClose}
          >
            I'm playing hard to get
          </button>
        )}
      </div>
    </div>
  );
};

export default PopupModal;
