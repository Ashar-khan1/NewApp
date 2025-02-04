// import React from "react";

// const HeroSection = () => {
//   return (
//     <section id="context" className=" w-full py-10 md:py-20 text-center">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row w-2/4 ml-1/2 items-center">
//           {/* Text Section */}
//           <div className="w-full  text-align: center;">
//             <h1 className="text-3xl md:text-5xl font-bold text-black">
//               DISCOVER, CREATE & SELL ARTWORKS.
//             </h1>
//             <p className="text-gray-600 mt-4 text-lg ">
//               Discover and trade unique digital art pieces on our NFT website,
//               where creativity meets blockchain technology.
//             </p>
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// };



// export default HeroSection;



import React from "react";


const HeroSection = () => {
  return (
    <section
      className="h-80 flex items-center justify-center py-10 md:py-20"
    >
      <div className="container mx-auto px-4 mt-16">
        <div className="flex flex-col items-center text-center">
          {/* Text Section */}
          <div className="w-full">
            <h1 className="text-lg mt-28 md:text-5xl font-bold text-black lg:text-[70px]">
              DISCOVER, CREATE &  SELL ARTWORKS.
            </h1>
            <p className="text-xs  w-50   text-gray-600 mt-4  sm:text-md sm:w-56 md:text-xl md:w-96 lg:w-1/2 mx-auto">
              Discover and trade unique digital art pieces on our NFT website,
              where creativity meets blockchain technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

//  min-h-screen

export default HeroSection;
