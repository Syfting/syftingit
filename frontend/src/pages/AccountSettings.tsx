import React from "react";
import TopNav from "../components/TopNav";
import axios from "axios";
import EmailSignup from "../components/EmailSignup";
import Footer from "../components/Footer";

const AccountSettingsPage: React.FC = () => {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // TODO replace with endpoint
      await axios.post("/api/account/update", { username, email });
      setMessage("Account updated successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Error updating account");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white min-h-screen max-w-screen font-sans">
        <TopNav />
        
        <div className="flex px-[6rem] py-[10rem]">
            <div className="flex-[1] bg-light h-[35rem] rounded-[1.5rem] font-semibold">
                <div className="mb-[2rem]">
                    <h2 className="mt-[1rem] ml-[2rem] text-[2rem] text-deepRed">PROFILE</h2>
                    <hr className="border-deepRed mb-[1rem] w-[14rem] ml-[2rem]" />
                    <ul className="text-[1.2rem] ml-[2rem] space-y-2">
                        <li className="cursor-pointer hover:text-brightRed">Manage Profile</li>
                        <li className="cursor-pointer hover:text-brightRed">Payment Methods</li>
                        <li className="cursor-pointer hover:text-brightRed">Password Management</li>
                    </ul>
                </div>
                <div>
                    <h2 className="mt-[1rem] ml-[2rem] text-[2rem] text-deepRed">STOREFRONT</h2>
                    <hr className="border-deepRed mb-[1rem] w-[14rem] ml-[2rem]" />
                    <ul className="text-[1.2rem] ml-[2rem] space-y-2">
                        <li className="cursor-pointer hover:text-brightRed">Storefront Bio</li>
                        <li className="cursor-pointer hover:text-brightRed">Menu Items</li>
                        <li className="cursor-pointer hover:text-brightRed">Current Orders</li>
                        <li className="cursor-pointer hover:text-brightRed">Availability</li>
                        <li className="cursor-pointer hover:text-brightRed">Messaging</li>
                        <li className="cursor-pointer hover:text-brightRed">Past Orders</li>
                        <li className="cursor-pointer hover:text-brightRed">Reviews</li>
                    </ul>
                </div>
            </div>

            <div className="flex-[1] ml-[5rem] mt-[1.5rem]">
                <img
                    src="/assets/profile-picture.png"
                    alt="Profile"
                    className="w-60 h-auto object-cover rounded-full mb-4"
                />
            </div>
            
            <div className="flex-[3] mt-[1.5rem]">
                <h1 className="text-[2.5rem] font-bold mb-4 text-dark">PROFILE</h1>
                <div className="border border-dark rounded-[1rem] p-6 bg-white">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-dark mb-1" htmlFor="username">
                                FIRST NAME
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="First Name"
                                className="w-[50%] rounded-[1rem] border border-deepRed px-4 py-2 focus:outline-none focus:ring-2 bg-white text-deepRed"
                            />
                        </div>

                        <div>
                            <label className="block text-dark mb-1" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Save Changes"}
                        </button>

                        {message && <p className="text-sm mt-2 text-green-600">{message}</p>}
                    </form>
                </div>
            </div>
        </div>

        <EmailSignup />
        <Footer />
    </div>
  );
};

export default AccountSettingsPage;
