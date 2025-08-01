import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string(),
  }).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
  
  export default function RegisterPage() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: zodResolver(registerSchema) });
  
    const navigate = useNavigate();
  
    const onSubmit = async (data: any) => {
      try {
        await axios.post(
          "https://syfting-backend.fly.dev/register",
          {
            email: data.email,
            password: data.password,
          },
          { withCredentials: true }
        );
        navigate("/login");
      } catch (err) {
        console.error(err);
        alert("Registration failed.");
      }
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 space-y-4">
        <h1 className="text-2xl text-center mb-4">Create Account</h1>
        <input {...register("email")} placeholder="Email" className="w-full p-2 rounded text-deepRed" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
  
        <input {...register("password")} type="password" placeholder="Password" className="w-full p-2 rounded text-deepRed" />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
  
        <input {...register("confirmPassword")} type="password" placeholder="Confirm Password" className="w-full p-2 rounded text-deepRed" />
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
  
        <button type="submit" className="bg-light text-deepRed px-4 py-2 rounded hover:bg-light">Sign Up</button>
      </form>
    );
  }
  