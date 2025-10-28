import React, { useState } from "react";
import axios from "axios";

const LaunchHomepage: React.FC = () => {
    const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    role: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const roles = ["I'm a Baker", "I'm a Customer", "I'm Both"];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.email || !formData.first_name || !formData.last_name || !formData.role) return;

        setIsSubmitting(true);
        setMessage("");
        setIsSuccess(false);

        try {
        const API_URL = import.meta.env.VITE_API_URL;
        await axios.post(`${API_URL}/email-signup`, formData);

        setMessage("🎉 You're on the list! We'll reach out soon.");
        setIsSuccess(true);
        setFormData({ email: "", first_name: "", last_name: "", role: "" });

        // Optional: fade out after 5 seconds
        } catch (err: any) {
        console.error(err);
        const backendMessage = err.response?.data?.detail;
        setMessage(backendMessage || "Uh oh, something went wrong. Please try again later.");
        setIsSuccess(false);
        } finally {
        setIsSubmitting(false);
        }
    };

    const allFilled =
        formData.email.trim() &&
        formData.first_name.trim() &&
        formData.last_name.trim() &&
        formData.role.trim();
    
  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-deepRed text-light font-monaco font-semibold">
        <div className="flex-1 ml-[8rem]">
            <img
            src="/assets/3-badge1.png"
            alt="Syfting Badge Logo"
            className="h-[40rem] w-auto"
            />
        </div>
        <div className="flex-1 mr-[8rem]">
            <div className="flex justify-center">
                <img
                src="/assets/mainlogo-brightRed.png"
                alt="Syfting Main Logo Bright Red"
                className="h-auto w-[32rem] object-center"
                />
            </div>
            <div>
                <h1 className="text-[2.3rem] text-center">We're launching soon...</h1>
                <h1 className="text-[2.3rem] text-center">Join the waitlist that's baking</h1>
                <h1 className="text-[2.3rem] text-center">the future.</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center mt-6">
                    <div className="flex mb-[1.5rem]">
                        <div className="flex-1 flex flex-col">
                            <input
                                type="email"
                                name="email"
                                placeholder="YOUR EMAIL"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-light text-[1.5rem] uppercase border-b border-light bg-transparent placeholder:text-light focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex gap-[2rem] mb-[1.5rem]">
                        <div className="flex-1 flex flex-col">
                             <input
                                type="text"
                                name="first_name"
                                placeholder="FIRST NAME"
                                value={formData.first_name}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-light text-[1.5rem] uppercase border-b border-light bg-transparent placeholder:text-light focus:outline-none"
                            />
                        </div>
                        <div className="flex-1 flex flex-col">
                             <input
                                type="text"
                                name="last_name"
                                placeholder="LAST NAME"
                                value={formData.last_name}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-light text-[1.5rem] uppercase border-b border-light bg-transparent placeholder:text-light focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex gap-[1rem] mt-8">
                        {roles.map((role) => (
                            <button
                            key={role}
                            type="button"
                            onClick={() => setFormData({ ...formData, role })}
                            className={`flex-1 text-[1.5rem] px-4 py-4 rounded-full border border-light transition-colors duration-200
                                ${
                                    formData.role === role
                                    ? "bg-light text-deepRed border-deepRed"
                                    : "bg-deepRed text-light hover:bg-light hover:text-deepRed hover:border-deepRed"
                                }
                            `}
                        >
                            {role}
                            </button>
                        ))}
                    </div>

                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            disabled={!allFilled || isSubmitting}
                            className={`w-auto text-beige text-[1.5rem] px-8 py-4 mt-[2rem] rounded-full transition-colors duration-200
                                ${
                                allFilled && !isSubmitting
                                    ? "bg-brightRed hover:opacity-90 cursor-pointer"
                                    : "bg-gray-400 cursor-not-allowed"
                                }`}
                            >
                            {isSubmitting ? "Submitting..." : "Get Syfting!"}
                        </button>
                    </div>

                    {message && (
                        <p
                        className={`text-center mt-4 text-[1.2rem] ${
                            isSuccess ? "text-light" : "text-beige"
                        }`}
                        >
                        {message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    </div>
  );
};

export default LaunchHomepage;
