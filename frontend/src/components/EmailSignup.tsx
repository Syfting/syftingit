const EmailSignup = () => (
    <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 text-center bg-brightRed px-4 pb-[4rem]">
            <img
                src="/assets/join-the-movement.png"
                alt="Syfting pennant"
                className=" bg-brightRed h-auto"
            />
            <form className="flex flex-col sm:flex-row justify-left items-center gap-4 mx-auto w-[40rem]">
            <input
                type="email"
                placeholder="Your Email"
                className="w-full sm:w-2/3 p-2 text-light uppercase border-b border-light bg-transparent placeholder:text-light focus:outline-none"
            />
            <button className="bg-light text-deepRed px-6 py-2 rounded-3xl">
                Get Syfting!
            </button>
            </form>
        </div>
        <div className="w-full md:w-1/2 bg-brightRed flex justify-center items-center">
            <img
            src="/assets/pennant-deep-red.png"
            alt="Syfting pennant"
            className=" bg-brightRed w-[37rem] h-auto mt-10"
            />
        </div>
    </div>
);

export default EmailSignup;
