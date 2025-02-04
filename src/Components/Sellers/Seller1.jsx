import React from "react";

const NFTCollections = () => {
  return (
    <section className="relative py-2 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Text Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl sm:text-6xl font-bold text-red-600 uppercase lg:text-[90px] xl:text-[120px]">
            SELLERS
          </h1>
        </div>

        {/* Right Image Section */}
        <div className="relative mt-8 lg:mt-0 lg:w-1/2">
          {/* Main Image */}
          <img
            src="./Main.png"
            alt="NFT Main"
            className="xl:w-[495px] xl:h-[555px]  mx-auto rounded-lg hidden lg:block z-20 relative"
          />
         
          {/* Decorative Shapes */}
        
        </div>
      </div>
    </section>
  );
};

export default NFTCollections;
