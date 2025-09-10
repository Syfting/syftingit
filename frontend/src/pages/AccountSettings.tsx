import React from "react";
import TopNav from "../components/TopNav";
import axios from "axios";
import EmailSignup from "../components/EmailSignup";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useUser } from "../contexts/UserContext";

const AccountSettingsPage: React.FC = () => {
    const { currentUserData, setCurrentUserData } = useUser();
    // const [first_name, setFirstName] = React.useState("");
    // const [last_name, setLastName] = React.useState("");
    // const [email, setEmail] = React.useState("");
    // const [phone_number, setPhoneNumber] = React.useState("");
    // const [address, setAddress] = React.useState("");
    // const [address2, setAdress2] = React.useState("");
    // const [state, setState] = React.useState("");
    // const [zip_code, setZipCode] = React.useState("");
    const [formData, setFormData] = React.useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        address: "",
        address2: "",
        state: "",
        zip_code: "",
      });
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

    try {
        // TODO replace with endpoint
        await axios.post("/api/account/update", { formData });
        setMessage("Account updated successfully!");
        } catch (err) {
        console.error(err);
        setMessage("Error updating account");
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        const getUser = async () => {
          const API_URL = import.meta.env.VITE_API_URL;
          try {
            const res = await axios.get(`${API_URL}/auth/me`, { withCredentials: true });
            setCurrentUserData(res.data);
          } catch (err) {
            console.error("Failed to fetch current user:", err);
            setCurrentUserData(null);
          }
        };
        getUser();
      }, [setCurrentUserData]);
    
      useEffect(() => {
        if (currentUserData) {
            setFormData({
                first_name: currentUserData.first_name || "",
                last_name: currentUserData.last_name || "",
                email: currentUserData.email || "",
                phone_number: currentUserData.phone_number || "",
                address: currentUserData.address || "",
                address2: currentUserData.address2 || "",
                state: currentUserData.state || "",
                zip_code: currentUserData.zip_code || "",
            })
        //   setFirstName(currentUserData.first_name);
        } else {
            setFormData({
                first_name: "",
                last_name: "",
                email: "",
                phone_number: "",
                address: "",
                address2: "",
                state: "",
                zip_code: "",
            })
        //   setFirstName("");
        }
      }, [currentUserData]);
  
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
                                    value={formData.first_name}
                                    onChange={(e) => setFormData({ ...formData, first_name: e.target.value})}
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
                                    value={formData.last_name}
                                    onChange={(e) => setFormData({ ...formData, last_name: e.target.value})}
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
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value})}
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
                                    value={formData.phone_number}
                                    onChange={(e) => setFormData({ ...formData, phone_number: e.target.value})}
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
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value})}
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
                                    value={formData.address2}
                                    onChange={(e) => setFormData({ ...formData, address2: e.target.value})}
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
                                    value={formData.state}
                                    onChange={(e) => setFormData({ ...formData, state: e.target.value})}
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
                                    value={formData.zip_code}
                                    onChange={(e) => setFormData({ ...formData, zip_code: e.target.value})}
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
