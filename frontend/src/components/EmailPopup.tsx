import React from "react";

interface EmailPopup {
  onClose: () => void;
}

const PopupModal: React.FC<EmailPopup> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex flex-col justify-center items-center w-full">

      <div className="relative bg-brightRed p-6 shadow-lg w-[63rem] h-1/3 flex items-center">
        <img
          src="/assets/27-badge2.png"
          alt="Cupcake"
          className="absolute top-4 -left-28 w-[22rem] h-auto rotate-[14deg] pointer-events-none z-20"
        />
      <img
          src="/assets/youre-so-sweet.png"
          alt="Cupcake"
          className="h-[20rem] mx-auto"
        />
      </div>

      <div className="relative bg-light p-6 shadow-lg w-[63rem] h-1/3 text-center">
        <img
          src="/assets/14-badge1.png"
          alt="Cupcake"
          className="absolute bottom-[4rem] -right-24 w-[16rem] h-auto -rotate-[18deg] pointer-events-none"
        />
        <p className="mb-4 text-brightRed font-semibold text-[2rem]">Sign up today!</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto mb-[4rem]">
              <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full sm:w-2/3 p-2 text-dark uppercase border-b border-dark bg-transparent placeholder:text-dark focus:outline-none"
              />
              <button className="bg-brightRed text-light px-6 py-2 rounded-3xl">
                  Get Syfting!
              </button>
              </form>
        <button
          className="mt-2 px-4 py-2 text-dark outline-none border border-dark rounded-3xl font-semibold"
          onClick={onClose}
        >
        I'm playing hard to get
        </button>
      </div>
    </div>

  );
};

export default PopupModal;
