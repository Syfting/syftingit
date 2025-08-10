import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-deepRed text-light">
      <div className="bg-deepRed p-6 rounded-lg shadow-lg w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
