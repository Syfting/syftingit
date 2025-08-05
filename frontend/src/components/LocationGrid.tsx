const LocationGrid = () => (
    <div>
        <div className="mt-10 flex items-center justify-end mr-40">
            <input
            type="text"
            placeholder="Search by baker, location, etc..."
            className="w-1/5 mb-6 px-2 pb-1 border-b border-dark text-dark focus:outline-none"
            />
            <button type="button" className="ml-2 text-dark focus:outline-none">
            <span className="material-symbols-outlined mb-6">search</span>
            </button>
        </div>

        {/* todo - replace with images and description from db */}
        <div className="max-w-screen-xl mx-auto px-6 flex flex-row gap-8">
            {/* col 1 */}
            <div className="flex flex-col items-center mb-16 w-1/3">
                <div className="flex flex-col items-left mb-4">
                    <img
                    src="/assets/discover-1.png"
                    alt="Sample 1"
                    className="w-full"
                    />

                    <h3 className="uppercase text-dark font-bold">Isabelita Bakes</h3>
                    <p className="text-sm text-dark text-left">Cheshire, United Kingdom</p>
                </div>
                <div className="flex flex-col items-left mb-4">

                    <img
                    src="/assets/discover-2.png"
                    alt="Sample 2"
                    className="w-full"
                    />

                    <h3 className="uppercase text-dark font-bold">Its my cakes</h3>
                    <p className="text-sm text-dark text-left">Chicago, Illinois</p>
                </div>
                <div className="flex flex-col items-left mb-4">

                    <img
                    src="/assets/discover-3.png"
                    alt="Sample 3"
                    className="w-full"
                    />

                    <h3 className="uppercase text-dark font-bold">Sample Baker</h3>
                    <p className="text-sm text-dark text-left">New York, NY</p>
                </div>
            </div>
            {/* col 2 */}
            <div className="flex flex-col items-center mb-16 w-1/3">
                <div className="flex flex-col items-left mb-4">
                    <img
                    src="/assets/discover-4.png"
                    alt="Sample 1"
                    className="w-full"
                    />
                    <h3 className="uppercase text-dark font-bold">Sample Baker</h3>
                    <p className="text-sm text-dark text-left">Jersey City, NJ</p>
                </div>
                <div className="flex flex-col items-left mb-4">
                    <img
                    src="/assets/discover-5.jpg"
                    alt="Sample 2"
                    className="w-full"
                    />
                    <h3 className="uppercase text-dark font-bold">Sample Baker</h3>
                    <p className="text-sm text-dark text-left">Reykjavik, Iceland</p>
                </div>
                <div className="flex flex-col items-left mb-4">
                    <img
                    src="/assets/discover-6.png"
                    alt="Sample 3"
                    className="w-full"
                    />
                    <h3 className="uppercase text-dark font-bold">Sample Baker</h3>
                    <p className="text-sm text-dark text-left">New York, NY</p>
                </div>
            </div>
            {/* col 3 */}
            <div className="flex flex-col items-center gap-4 mb-16 w-1/3">
                <div className="flex flex-col items-left mb-4">
                    <img
                    src="/assets/discover-7.jpg"
                    alt="Sample 1"
                    className="w-full"
                    />
                    <h3 className="uppercase text-dark font-bold">Sample Baker</h3>
                    <p className="text-sm text-dark text-left">Copenhagen, Denmark</p>
                </div>
                <div className="flex flex-col items-left mb-4">
                    <img
                    src="/assets/discover-8.jpg"
                    alt="Sample 2"
                    className="w-full"
                    />
                    <h3 className="uppercase text-dark font-bold">Sample Baker</h3>
                    <p className="text-sm text-dark text-left">Cape Cod, Massachusetts</p>
                </div>
                <div className="flex flex-col items-left mb-4">
                    <img
                    src="/assets/discover-9.jpg"
                    alt="Sample 3"
                    className="w-full"
                    />
                    <h3 className="uppercase text-dark font-bold">Sample Baker</h3>
                    <p className="text-sm text-dark text-left">New York, NY</p>

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
