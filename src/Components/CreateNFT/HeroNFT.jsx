

import React from "react";


const HeroSection = () => {
  return (
    <section
      className="h-80 flex items-center justify-center  md:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Text Section */}
          <div className="w-full">
            <h1 className="text-lg  md:text-5xl font-bold text-black lg:text-[50px] uppercase">
            Create your own  <span className="border-t-4 border-r-4 border-red-500 rounded-r">
              
              masterpiece
              </span>
            </h1>
          
          </div>
        </div>
      </div>

    </section>
  );
};

//  min-h-screen

export default HeroSection;
