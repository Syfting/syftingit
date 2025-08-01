import React from "react";

const CityTabs = () => (
<div className="mt-8 ">
    <h3 className="text-center text-3xl text-deepRed uppercase tracking-widest font-bold mb-2">Location</h3>
    <hr className="h-px w-1/5 m-auto border-deepRed "></hr>
    <div className="flex flex-wrap justify-center gap-8 mt-8 mb-16">
  <div className="flex flex-col items-center w-52 group">
    <div className="relative h-44 w-52">
      <img
        src="/assets/hp-nyc-bw.png"
        alt="NYC black and white"
        className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
      />
      <img
        src="/assets/hp-nyc-color.png"
        alt="NYC color"
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
    <p className="mt-2 text-dark text-sm font-semibold text-center">New York City</p>
  </div>

  <div className="flex flex-col items-center w-52 group">
    <div className="relative h-44 w-52">
      <img
        src="/assets/hp-chi-bw.png"
        alt="Chicago black and white"
        className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
      />
      <img
        src="/assets/hp-chi-color.png"
        alt="Chicago color"
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
    <p className="mt-2 text-dark text-sm font-semibold text-center">Chicago</p>
  </div>

  <div className="flex flex-col items-center w-52 group">
    <div className="relative h-44 w-52">
      <img
        src="/assets/hp-cle-bw.png"
        alt="Cleveland black and white"
        className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
      />
      <img
        src="/assets/hp-cle-color.png"
        alt="Cleveland color"
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
    <p className="mt-2 text-dark text-sm font-semibold text-center">Cleveland</p>
  </div>

  <div className="flex flex-col items-center w-52 group">
    <div className="relative h-44 w-52">
      <img
        src="/assets/hp-cvg-bw.png"
        alt="Cincinnati black and white"
        className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
      />
      <img
        src="/assets/hp-cvg-color.png"
        alt="Cincinnati color"
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
    <p className="mt-2 text-dark text-sm font-semibold text-center">Cincinnati</p>
  </div>
</div>
    <hr className="h-px w-3/5 m-auto border-dark "></hr>
</div>
);

export default CityTabs;
