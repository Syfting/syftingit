import React from "react";

interface EmailPopup {
  onClose: () => void;
}

const PopupModal: React.FC<EmailPopup> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center w-full z-50">

      <div className="relative bg-brightRed p-6 shadow-lg max-w-xl w-full">
        <img
          src="/assets/27-badge2.png"
          alt="Cupcake"
          className="absolute top-4 -left-28 w-56 h-auto rotate-12 pointer-events-none z-20"
      />
      {/* todo: replace with image */}
      <h2 className="text-5xl font-bold mb-4 text-center">you're so</h2>
      <h2 className="text-5xl font-bold mb-4 text-center">sweet</h2>
      </div>

      <div className="relative bg-light p-6 shadow-lg max-w-xl w-full text-center z-10">
        <img
          src="/assets/14-badge1.png"
          alt="Cupcake"
          className="absolute -bottom-20 -right-24 w-48 h-auto -rotate-12 pointer-events-none"
        />
        <p className="mb-4 text-brightRed font-semibold">Sign up today!</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto mb-16 mt-8">
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
        No thanks...I'm salty
        </button>
      </div>
    </div>

  );
};

export default PopupModal;
