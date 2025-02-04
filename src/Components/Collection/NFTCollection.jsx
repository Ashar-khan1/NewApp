import React from "react";

const NFTCollections = () => {
  return (
    <section className="relative py-12 bg-gradient-to-r from-white to-pink-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Text Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl sm:text-6xl font-bold text-red-600 uppercase lg:text-[220px]">
            NFT <span className="block text-2xl sm:text-4xl text-black lg:text-[64px]">Collections</span>
          </h1>
        </div>

        {/* Right Image Section */}
        <div className="relative mt-8 lg:mt-0 lg:w-1/2">
          {/* Main Image */}
          <img
            src="/Collection/M.png"
            alt="NFT Main"
            className="w-64 h-64 lg:w-80 lg:h-80 mx-auto rounded-lg  z-20 relative"
          />
          {/* Overlapping Images
          <img
            src="/Collection/M2.png"
            alt="NFT Left"
            className="absolute top-10 left-[-40px] w-40 h-40 rounded-lg shadow-lg z-10"
          />
          <img
            src="/Collection/M2.png"
            alt="NFT Right"
            className="absolute bottom-10 right-[-40px] w-40 h-40 rounded-lg shadow-lg z-10"
          /> */}

          {/* Decorative Shapes */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="absolute w-56 h-56 bg-red-500 rounded-xl rotate-45 opacity-10"></div>
            <div className="absolute w-40 h-40 bg-black rounded-lg rotate-45 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTCollections;
