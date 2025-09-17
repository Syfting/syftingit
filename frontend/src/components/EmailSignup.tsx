import { useState } from "react";
import axios from "axios";
import React from "react";

const EmailSignup: React.FC = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
        const API_URL = import.meta.env.VITE_API_URL;
        await axios.post(`${API_URL}/email-signup`, { email });
        setMessage("Successfully signed up!");
        setEmail("");
        } catch (err: any) {
        console.error(err);
        setMessage(
            err.response?.data?.detail || "Something went wrong. Try again."
        );
        } finally {
        setLoading(false);
        }
    };

    return (
    <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 text-center bg-brightRed px-4 pb-[4rem]">
            <img
                src="/assets/join-the-movement.png"
                alt="Syfting pennant"
                className=" bg-brightRed h-auto"
            />
            <form 
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row justify-left items-center gap-4 mx-auto w-[40rem]"
            >
            <input
                type="email"
                placeholder="Your Email"
                className="w-full sm:w-2/3 p-2 text-light uppercase border-b border-light bg-transparent placeholder:text-light focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button
                type="submit"
                className="bg-light text-deepRed px-6 py-2 rounded-3xl"
                disabled={loading}
            >
                {loading ? "Signing up..." : "Get Syfting!"}
            </button>
            </form>
            {message && <p className="text-light mt-2">{message}</p>}
        </div>
        <div className="w-full md:w-1/2 bg-brightRed flex justify-center items-center">
            <img
            src="/assets/pennant-deep-red.png"
            alt="Syfting pennant"
            className=" bg-brightRed w-[37rem] h-auto mt-10"
            />
        </div>
    </div>
    );
};

export default EmailSignup;
