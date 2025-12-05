import React from "react";
import axios from "axios";
import { useEffect } from "react";

interface CreateStorefrontProps {
  onCancel?: () => void;
  initialData?: any;
}

const CreateStorefront: React.FC<CreateStorefrontProps> = ({ onCancel, initialData }) => {
    const [formData, setFormData] = React.useState({
        bio: initialData?.bio || "",
        delivery: initialData?.delivery || false,
        pickup: initialData?.pickup || false,
        delivery_range: initialData?.delivery_range || 0,
        pickup_address: initialData?.pickup_address || "",
        pickup_address_2: initialData?.pickup_address_2 || "",
        state: initialData?.state || "",
        zip_code: initialData?.zip_code || "",
        same_as_user_address: initialData?.same_as_user_address || false,
    });

    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [errors, setErrors] = React.useState({
        bio: "",
        pickup_delivery: "",
        delivery_range: "",
        pickup_address: "",
        state: "",
        zip_code: ""
    });

    const validate = () => {
        const newErrors = {
            bio: "",
            pickup_delivery: "",
            delivery_range: "",
            pickup_address: "",
            state: "",
            zip_code: ""
        };

        if (!formData.bio.trim()) newErrors.bio = "This field is mandatory";
        if (!formData.pickup && !formData.delivery) newErrors.pickup_delivery = "Select at least one option";
        if (formData.delivery && (formData.delivery_range <= 0 || isNaN(formData.delivery_range))) {
            newErrors.delivery_range = "Enter a valid delivery range";
        }
        if (!formData.pickup_address.trim()) newErrors.pickup_address = "This field is mandatory";
        if (!formData.state.trim()) newErrors.state = "This field is mandatory";
        if (!formData.zip_code.trim()) newErrors.zip_code = "This field is mandatory";

        setErrors(newErrors);
        return !Object.values(newErrors).some(e => e);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        setMessage("");

        try {
            const API_URL = import.meta.env.VITE_API_URL;
            if (initialData) {
                await axios.put(`${API_URL}/storefront`, formData, { withCredentials: true });
            } else {
                await axios.post(`${API_URL}/storefront`, formData, { withCredentials: true });
            }

            setMessage("Storefront saved successfully!");
            if (onCancel) onCancel();
        } catch (err: any) {
            console.error(err);
            setMessage(err.response?.data?.detail || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
                if (message) {
                    const timer = setTimeout(() => setMessage(""), 5000);
                    return () => clearTimeout(timer);
                }
            }, [message]);

    return (
        <div className="border border-dark rounded-[1rem] p-6 bg-white">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label className="text-dark mb-1">
                        BIO
                        {errors.bio && <span className="text-red-600 ml-2">{errors.bio}</span>}
                    </label>
                    <textarea
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        className="w-full rounded-[1rem] border border-deepRed px-4 py-2 focus:outline-none focus:ring-2 bg-white text-deepRed"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-dark mb-1">PICKUP/DELIVERY OPTIONS</label>
                    {errors.pickup_delivery && <span className="text-red-600 mb-1">{errors.pickup_delivery}</span>}
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={formData.pickup}
                                onChange={(e) => setFormData({ ...formData, pickup: e.target.checked })}
                                className="w-5 h-5 accent-brightRed"
                            />
                            <span>Pickup</span>
                        </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={formData.delivery}
                            onChange={(e) => setFormData({ ...formData, delivery: e.target.checked })}
                            className="w-5 h-5 accent-brightRed"
                        />
                        <span>Delivery</span>
                    </div>

                    {formData.delivery && (
                        <div className="flex items-center gap-2 ml-4">
                            <span>Delivery Range:</span>
                            <input
                                type="number"
                                min={0}
                                value={formData.delivery_range}
                                onChange={(e) => setFormData({ ...formData, delivery_range: Number(e.target.value) })}
                                className="w-24 border border-gray-300 rounded px-2 py-1 bg-white"
                                placeholder="km"
                            />
                            {errors.delivery_range && <span className="text-red-600 ml-1">{errors.delivery_range}</span>}
                        </div>
                    )}
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex-1 flex flex-col">
                        <label>PICKUP ADDRESS {errors.pickup_address && <span className="text-red-600 ml-1">{errors.pickup_address}</span>}</label>
                        <input
                            type="text"
                            value={formData.pickup_address}
                            onChange={(e) => setFormData({ ...formData, pickup_address: e.target.value })}
                            placeholder="123 Main Street"
                            className="w-full rounded-[1rem] border border-deepRed px-4 py-2 bg-white"
                        />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <label>PICKUP ADDRESS 2</label>
                        <input
                            type="text"
                            value={formData.pickup_address_2}
                            onChange={(e) => setFormData({ ...formData, pickup_address_2: e.target.value })}
                            placeholder="Apt, Suite, etc."
                            className="w-full rounded-[1rem] border border-deepRed px-4 py-2 bg-white"
                        />
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex-1 flex flex-col">
                        <label>STATE {errors.state && <span className="text-red-600 ml-1">{errors.state}</span>}</label>
                        <input
                            type="text"
                            value={formData.state}
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            placeholder="State"
                            className="w-full rounded-[1rem] border border-deepRed px-4 py-2 bg-white"
                        />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <label>ZIPCODE{errors.zip_code && <span className="text-red-600 ml-1">{errors.zip_code}</span>}</label>
                        <input
                            type="number"
                            value={formData.zip_code}
                            onChange={(e) => setFormData({ ...formData, zip_code: e.target.value })}
                            placeholder="12345"
                            className="w-full rounded-[1rem] border border-deepRed px-4 py-2 bg-white"
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-2 mt-4">
                    {message && <span className="text-green-600 mr-2 mt-2">{message}</span>}
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-deepRed text-light px-4 py-2 rounded hover:bg-brightRed"
                    >
                    {loading ? "Saving..." : "Save"}
                    </button>

                    {onCancel && (
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2 rounded bg-light hover:bg-brightRed"
                        >
                        Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CreateStorefront;
