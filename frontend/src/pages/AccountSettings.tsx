import React from "react";
import TopNav from "../components/TopNav";
import axios from "axios";
import EmailSignup from "../components/EmailSignup";
import Footer from "../components/Footer";

const AccountSettingsPage: React.FC = () => {
    const [first_name, setFirstName] = React.useState("");
    const [last_name, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone_number, setPhoneNumber] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [address2, setAdress2] = React.useState("");
    const [state, setState] = React.useState("");
    const [zip_code, setZipCode] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

    try {
      // TODO replace with endpoint
      await axios.post("/api/account/update", { email });
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
                        <div className="flex gap-[1rem]">
                            <div className="flex-1 flex flex-col">
                                <label className="text-dark mb-1" htmlFor="first_name">
                                FIRST NAME
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    value={first_name}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="First Name"
                                    className="w-full rounded-[1rem] border border-deepRed px-4 py-2 focus:outline-none focus:ring-2 bg-white text-deepRed"
                                />
                            </div>
                            
                            <div className="flex-1 flex flex-col">
                                <label className="flex text-dark mb-1" htmlFor="last_name">
                                    LAST NAME
                                </label>
                                <input
                                    type="text"
                                    id="last_name"
                                    value={last_name}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Last Name"
                                    className="w-full rounded-[1rem] border border-deepRed px-4 py-2 focus:outline-none focus:ring-2 bg-white text-deepRed"
                                />
                            </div>
                        </div>

                        <div className="flex gap-[1rem]">
                            <div className="flex-1 flex flex-col">
                                <label className="text-dark mb-1" htmlFor="email">
                                EMAIL
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    className="w-full rounded-[1rem] border border-deepRed px-4 py-2 focus:outline-none focus:ring-2 bg-white text-deepRed"
                                />
                            </div>
                            
                            <div className="flex-1 flex flex-col">
                                <label className="flex text-dark mb-1" htmlFor="phone_number">
                                    PHONE NUMBER
                                </label>
                                <input
                                    type="number"
                                    id="phone_number"
                                    value={phone_number}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="Phone Number"
                                    className="w-full rounded-[1rem] border border-deepRed px-4 py-2 focus:outline-none focus:ring-2 bg-white text-deepRed"
                                />
                            </div>
                        </div>

                        <div className="flex gap-[1rem]">
                            <div className="flex-1 flex flex-col">
                                <label className="text-dark mb-1" htmlFor="address">
                                ADDRESS
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="123 Main Street"
                                    className="w-full rounded-[1rem] border border-deepRed px-4 py-2 focus:outline-none focus:ring-2 bg-white text-deepRed"
                                />
                            </div>
                            
                            <div className="flex-1 flex flex-col">
                                <label className="flex text-dark mb-1" htmlFor="address2">
                                    Address 2
                                </label>
                                <input
                                    type="text"
                                    id="address2"
                                    value={address2}
                                    onChange={(e) => setAdress2(e.target.value)}
                                    placeholder="Apt, Suite, etc. (optional)"
                                    className="w-full rounded-[1rem] border border-deepRed px-4 py-2 focus:outline-none focus:ring-2 bg-white text-deepRed"
                                />
                            </div>
                        </div>

                        <div className="flex gap-[1rem]">
                            <div className="flex-1 flex flex-col">
                                <label className="text-dark mb-1" htmlFor="state">
                                STATE
                                </label>
                                <input
                                    type="dropdown"
                                    id="state"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    placeholder="State"
                                    className="w-full rounded-[1rem] border border-deepRed px-4 py-2 focus:outline-none focus:ring-2 bg-white text-deepRed"
                                />
                            </div>
                            
                            <div className="flex-1 flex flex-col">
                                <label className="flex text-dark mb-1" htmlFor="zip_code">
                                    ZIPCODE
                                </label>
                                <input
                                    type="number"
                                    id="zip_code"
                                    value={zip_code}
                                    onChange={(e) => setZipCode(e.target.value)}
                                    placeholder="12345"
                                    className="w-full rounded-[1rem] border border-deepRed px-4 py-2 focus:outline-none focus:ring-2 bg-white text-deepRed"
                                />
                            </div>
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
