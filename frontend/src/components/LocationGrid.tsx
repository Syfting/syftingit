import React from "react";

const LocationGrid = () => (
    <div>
        <div className="mt-10 flex items-center justify-end mr-40">
            <input
            type="text"
            placeholder="Search by baker, location, etc..."
            className="w-1/5 mb-6 px-2 pb-1 border-b border-dark text-dark"
            />
            <button type="button" className="ml-2 text-dark focus:outline-none">
            <span className="material-symbols-outlined mb-6">search</span>
            </button>
        </div>

        {/* todo - replace with images and description from db */}
        <div className="max-w-screen-xl mx-auto px-6">
            <div className="flex justify-center gap-8 mb-16">
                <div className="flex flex-col items-center flex-grow">
                    <img
                    src="/assets/discover-1.png"
                    alt="Sample 1"
                    className="w-full"
                    />
                    <p className="mt-2 text-sm text-dark text-center">Banana Bread</p>
                </div>
                <div className="flex flex-col items-center flex-grow">
                    <img
                    src="/assets/discover-2.png"
                    alt="Sample 2"
                    className="w-full"
                    />
                    <p className="mt-2 text-sm text-dark text-center">Chocolate Chip Cookies</p>
                </div>
                <div className="flex flex-col items-center flex-grow">
                    <img
                    src="/assets/discover-3.png"
                    alt="Sample 3"
                    className="w-full"
                    />
                    <p className="mt-2 text-sm text-dark text-center">Lemon Loaf</p>
                </div>
            </div>
        </div>
        <img
        src="/assets/logomark-deep-red.png"
        alt="Syfting bycicle with cake"
        className="w-32 mx-auto block"
        />
        <hr className="h-px w-11/12 m-auto border-deepRed mb-8" />
    </div>
);

export default LocationGrid;
