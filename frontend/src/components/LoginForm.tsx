import { useState } from "react";
import { useForm, type SubmitHandler, type FieldValues, type Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import axios from "axios";

// ---------------- Schemas ----------------
const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = z.object({
  first_name: z.string().min(2, "First Name is required"),
  last_name: z.string().min(2, "Last Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm Password is required"),
}).superRefine((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      path: ["confirmPassword"], // attaches error to confirm_password field
      message: "Passwords don't match",
      code: z.ZodIssueCode.custom,
    });
  }
});

// ---------------- Input Types ----------------
type LoginFormInputs = z.infer<typeof loginSchema>;
type SignupFormInputs = z.infer<typeof signupSchema>;

// ---------------- Field Type ----------------
type Field<T extends FieldValues> = {
  name: keyof T;
  label: string;
  type: string;
};

// ---------------- Generic Dynamic Form ----------------
type DynamicFormProps<T extends FieldValues> = {
  schema: z.ZodType<T, any>;
  fields: Field<T>[];
  mode: "login" | "signup";
  onSuccess?: () => void;
};

function DynamicForm<T extends FieldValues>({
  schema,
  fields,
  mode,
  onSuccess,
  }: DynamicFormProps<T>) {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<T> = async (data) => {
    setLoading(true);
    setServerError("");
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      if (mode === "login") {
        await axios.post(`${API_URL}/auth/login`, data, { withCredentials: true });
      } else {
        await axios.post(`${API_URL}/auth/register`, data, {
          headers: { "Content-Type": "application/json" },
        });
      }
      if (onSuccess) onSuccess();
    } catch (err: any) {
      setServerError(
        err.response?.data?.detail || err.response?.data?.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-h-[43vh] overflow-y-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="text-deepRed">
      {serverError && (
        <p className="text-brightRed text-center mb-4">{serverError}</p>
      )}
      {fields.map((field) => (
        <div key={String(field.name)} className="mb-4">
          <label className="block font-semibold tracking-wider text-sm pb-[0.5rem]">
            {field.label}
          </label>
          <div className="flex items-center mb-4">
            <input
              {...register(field.name as Path<T>)}
              type={field.type === "password" && showPassword ? "text" : field.type}
              className="w-full rounded-full border border-deepRed px-4 py-2 focus:outline-none focus:ring-2 bg-white text-deepRed"
            />
            {field.type === "password" && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 px-3 py-2 bg-deepRed text-white rounded-full text-sm font-semibold"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            )}
          </div>
          {errors[field.name]?.message && (
            <p className="text-brightRed text-xs mt-1">
              {errors[field.name]?.message?.toString()}
            </p>
          )}
        </div>
      ))}

      {mode === "login" && (
        <div className="text-brightRed text-sm text-left font-semibold cursor-pointer hover:underline mb-4">
          Forgot password?
        </div>
      )}

      <div className="flex justify-center pt-4">
        <button
          type="submit"
          disabled={loading}
          className="w-[10rem] bg-brightRed text-white rounded-full py-2 font-semibold disabled:opacity-50"
        >
          {loading
            ? mode === "login"
              ? "Signing In..."
              : "Signing Up..."
            : mode === "login"
            ? "Sign In"
            : "Sign Up"}
        </button>
      </div>

      {/* Divider */}
      {/* <div className="flex items-center text-deepRed text-sm font-medium my-4">
        <div className="flex-grow border-t border-deepRed"></div>
        <div className="px-3 whitespace-nowrap">Or Continue With</div>
        <div className="flex-grow border-t border-deepRed"></div>
      </div> */}

      {/* Social Buttons */}
      {/* <div className="flex gap-4 justify-center">
        <button
          type="button"
          onClick={() => alert("Google login clicked")}
          className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 bg-white hover:bg-gray-100"
        >
          <FcGoogle size={20} /> Google
        </button>
        <button
          type="button"
          onClick={() => alert("Facebook login clicked")}
          className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 bg-white hover:bg-gray-100"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
            alt="Facebook"
            className="w-5 h-5"
          />
          Facebook
        </button>
      </div> */}
    </form>
    </div>
    
  );
}

// ---------------- LoginForm Wrapper ----------------
export default function LoginForm({ onSuccess }: { onSuccess?: () => void }) {
  const [mode, setMode] = useState<"login" | "signup">("login");

  const loginFields: Field<LoginFormInputs>[] = [
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ];

  const signupFields: Field<SignupFormInputs>[] = [
    { name: "first_name", label: "First Name", type: "text" },
    { name: "last_name", label: "Last Name", type: "text" },
    ...loginFields,
    { name: "confirmPassword", label: "Confirm Password", type: "password" },
  ];

  return (
    <div className="flex">
      {/* Left image */}
      <div className="w-1/2">
        <img
          src="/assets/login-girl-with-cake.jpg"
          alt="girl with cake"
          className="w-full"
        />
      </div>

      {/* Right form */}
      <div className="w-1/2 px-[5rem] py-[5rem]">
        {/* Toggle buttons */}
        <div className="flex justify-center overflow-hidden mx-auto mb-8">
          <div className="inline-flex">
            <button
              type="button"
              className={`uppercase px-6 py-2 font-semibold rounded-r-none ${
                mode === "login"
                  ? "bg-deepRed text-beige-200"
                  : "bg-light text-deepRed border-deepRed"
              }`}
              onClick={() => setMode("login")}
            >
              LOG IN
            </button>
            <button
              type="button"
              className={`uppercase px-6 py-2 font-semibold rounded-l-none ${
                mode === "signup"
                  ? "bg-deepRed text-beige-200"
                  : "bg-light text-deepRed border-deepRed"
              }`}
              onClick={() => setMode("signup")}
            >
              CREATE ACCOUNT
            </button>
          </div>
        </div>

        {/* Render the correct form */}
        {mode === "login" ? (
          <DynamicForm<LoginFormInputs>
            schema={loginSchema}
            fields={loginFields}
            mode="login"
            onSuccess={onSuccess}
          />
        ) : (
          <DynamicForm<SignupFormInputs>
            schema={signupSchema}
            fields={signupFields} // <-- includes Name + Email + Password
            mode="signup"
            onSuccess={onSuccess}
          />
        )}
      </div>
    </div>
  );
}
