const EmailSignup = () => (
  <div className="text-center bg-brightRed py-12 px-4">
        <h2 className="text-4xl font-medium mb-4 tracking-widest uppercase">Join the Movement</h2>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
        <input
            type="email"
            placeholder="Your Email"
            className="w-full sm:w-2/3 p-2 text-light uppercase border-b border-light bg-transparent focus:outline-none focus:border-b-light placeholder:text-light"
        />
        <button className="bg-light text-deepRed px-6 py-2 rounded-3xl hover:bg-brightRed transition">
            Get Syfting!
        </button>
        </form>
  </div>
);

export default EmailSignup;
