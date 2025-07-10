import React from "react";

const FAQ: React.FC = () => {
    return (
        <div className="bg-deepRed text-light">
      <div className="pt-12 flex flex-col items-center space-y-6">
        {/* Bigger & higher image */}
        <img
          src="./assets/29-badge2.png"
          alt="Spinning Logo"
          className="h-40 w-40 animate-spin [animation-duration:10s]"
        />
        <p className="text-2xl font-semibold">Coming Soon</p>
      </div>
    </div>
    )
   
}

export default FAQ;