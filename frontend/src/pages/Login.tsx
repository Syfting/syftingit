import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export default function LoginPage() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: zodResolver(schema) });
  
    const navigate = useNavigate();
  
    const onSubmit = async (data: any) => {
      try {
        await axios.post(
          "https://syfting-backend.fly.dev/login",
          data,
          { withCredentials: true } // important for cookies
        );
        navigate("/"); // redirect after login
      } catch (err) {
        console.error(err);
        alert("Login failed.");
      }
    };
  
    return (
        <div className="flex flex-col items-center justify-center w-screen bg-deepRed text-light">
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 space-y-4">
                {/* <h1 className="text-2xl mb-4">Login</h1> */}
                <input {...register("email")} placeholder="Email" className="p-2 rounded text-deepRed" />
                {errors.email && <p className="text-brightRed">{errors.email.message}</p>}
        
                <input {...register("password")} type="password" placeholder="Password" className="p-2 rounded text-deepRed" />
                {errors.password && <p className="text-brightRed">{errors.password.message}</p>}
        
                <button type="submit" className="bg-light text-deepRed px-4 py-2 rounded hover:bg-light">Login</button>
            </form>

            <p className="mt-4 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
            Create one
            </Link>
      </p>
      </div>
    );
  }
