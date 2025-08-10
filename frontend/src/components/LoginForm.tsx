import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginFormProps = {
  onSuccess?: () => void;
};

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data: any) => {
    try {
      await axios.post("https://syfting-backend.fly.dev/login", data, {
        withCredentials: true,
      });
      if (onSuccess) onSuccess();
    } catch {
      alert("Login failed.");
    }
  };

  return (
    <div className="flex">
        <div className="w-1/2">
            <img
            src="/assets/login-girl-with-cake.jpg"
            alt="Sample 1"
            className="w-full"
            />
        </div>

        <div className="w-1/2 px-[5rem] py-[5rem]">
            <div className="flex justify-center overflow-hidden mx-auto mb-8">
                <div className="inline-flex">
                    <button className="bg-deepRed text-beige-200 uppercase px-6 py-2 font-semibold rounded-r-none">
                        LOG IN
                    </button>

                    <button className="bg-light text-deepRed uppercase px-6 py-2 font-semibold border-deepRed rounded-l-none">
                        CREATE ACCOUNT
                    </button>
                </div>
                
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="text-deepRed">
                <label className="block font-semibold tracking-wider text-sm pb-[1rem]">Email</label>
                <input
                    {...register("email")}
                    className="w-full rounded-full border border-deepRed px-4 py-2 focus:outline-none focus:ring-2 bg-white text-deepRed"
                />
                {errors.email && (
                    <p className="text-brightRed text-xs mt-1">{errors.email.message}</p>
                )}

                <label className="block font-semibold tracking-wider text-sm py-[1rem]">Password</label>
                <input
                    {...register("password")}
                    type="password"
                    className="w-full rounded-full border border-deepRed px-4 py-2 focus:outline-none bg-white text-deepRed"
                />
                {errors.password && (
                    <p className="text-[#D75F36] text-xs mt-1">{errors.password.message}</p>
                )}

                <div className="text-brightRed py-[1rem] text-sm text-left font-semibold cursor-pointer hover:underline">
                    Forgot password?
                </div>

                <div className="flex justify-center">
                    <button
                    type="submit"
                    className="w-[10rem] bg-brightRed text-white rounded-full py-2 font-semibold self-center"
                    >
                    Sign In
                    </button>
                </div>

                {/* Divider with text */}
                <div className="flex items-center text-deepRed text-sm font-medium my-4">
                    <div className="flex-grow border-t border-deepRed"></div>
                    <div className="px-3 whitespace-nowrap">Or Continue With</div>
                    <div className="flex-grow border-t border-deepRed"></div>
                </div>

                {/* Social Buttons */}
                <div className="flex gap-4 justify-center">
                    <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 bg-white hover:bg-gray-100">
                    <FcGoogle size={20} />
                    Google
                    </button>
                    <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 bg-white hover:bg-gray-100">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                        alt="Facebook"
                        className="w-5 h-5"
                    />
                    Facebook
                    </button>
                </div>
             </form>
        </div>
    </div>
  );
}
