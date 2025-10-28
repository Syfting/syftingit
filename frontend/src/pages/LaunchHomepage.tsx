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
        {/* show only on large screens */}
        <div className="
                hidden md:block
                flex-1 ml-[8rem]
            ">
            <img
            src="/assets/3-badge1.png"
            alt="Syfting Badge Logo"
            className="h-[30rem] w-auto"
            className="h-[30rem] w-auto"
            />
        </div>

        <div className="
                flex-1 mr-[2rem] ml-[2rem]
                md:mr-[8rem]
            ">
            <div className="flex justify-center">
                <img
                src="/assets/mainlogo-brightRed.png"
                alt="Syfting Main Logo Bright Red"
                className="
                    h-auto w-[15rem] object-center
                    md:w-[27rem]
                "
                />
            </div>

            {/* show only on mobile */}
            <div className="
                    md:hidden flex justify-center mb-4
                ">
                <img
                src="/assets/3-badge1.png"
                alt="Syfting Badge Logo"
                className="h-[15rem] w-auto"
                />
            </div>

            <div>
                <h1 className="
                    text-[1.2rem] text-center
                    md:text-[1.8rem]
                ">We're launching soon...</h1>
                <h1 className="
                    text-[1.2rem] text-center
                    md:text-[1.8rem]
                ">Join the waitlist that's baking</h1>
                <h1 className="
                    text-[1.2rem] text-center
                    md:text-[1.8rem]
                ">the future.</h1>
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
                                className="
                                    w-full p-2 text-light text-[0.8rem] uppercase border-b border-light bg-transparent placeholder:text-light focus:outline-none
                                    md:text-[1.3rem]
                                "
                            />
                        </div>
                    </div>

                    <div className="
                            flex gap-[0.7rem] mb-[1.5rem]
                            md:gap-[2rem]
                        ">
                        <div className="flex-1 flex flex-col">
                             <input
                                type="text"
                                name="first_name"
                                placeholder="FIRST NAME"
                                value={formData.first_name}
                                onChange={handleChange}
                                required
                                className="
                                    w-full p-2 text-light text-[0.8rem] uppercase border-b border-light bg-transparent placeholder:text-light focus:outline-none
                                    md:text-[1.3rem]
                                "
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
                                className="
                                    w-full p-2 text-light text-[0.8rem] uppercase border-b border-light bg-transparent placeholder:text-light focus:outline-none
                                    md:text-[1.3rem]
                                "
                            />
                        </div>
                    </div>

                    <div className="
                            flex gap-[0.4rem] 
                            md:mt-8 md:gap-[1rem]
                        ">
                        {roles.map((role) => (
                            <button
                            key={role}
                            type="button"
                            onClick={() => setFormData({ ...formData, role })}
                            // padding makes badge logo appear/disappear
                            className={`
                                flex-1 text-[0.7rem] py-2 rounded-full border border-light transition-colors duration-200
                                md:text-[1.3rem] md:px-4
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
                            className={`
                                w-auto text-beige text-[1rem] px-6 py-2 mt-[2rem] rounded-full transition-colors duration-200
                                md:text-[1.5rem] md:px-8 md:py-4
                                ${
                                allFilled && !isSubmitting
                                    ? "bg-brightRed hover:opacity-90 cursor-pointer"
                                    : "bg-brightRed cursor-not-allowed"
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
