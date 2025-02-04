import React from "react";

const BoostNFTs = () => {
  return (
    <section className="p-8 lg:flex lg:items-center lg:justify-between  justify-center mx-auto max-w-6xl">
      {/* Left Content */}
      <div className="lg:max-w-lg text-center lg:text-left mb-8 lg:mb-0">
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4 uppercase~">
       <span className="uppercase"> Boost Your NFTs:</span> <br />  
        Enhance Visibility and Value
        </h2>
        <p className="text-gray-600 mb-6">
          The Boost feature is a premium service that allows NFT creators and
          collectors to elevate their listings on our marketplace. By boosting
          an NFT, you can ensure it appears prominently in search results,
          featured sections, and on the homepage, maximizing exposure to
          potential buyers.
        </p>
        <div className=" flex justify-center lg:justify-start">
        <button className="bg-red-500 text-white px-4 align-middle flex justify-center gap-3 py-2 rounded-lg hover:bg-red-600 transition">
          Boost <img src="public/vector.png" alt="" className="" />
        </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative flex justify-center lg:justify-end">
        <img src="public/bost.png" alt="" className="h-4/5"/>
        {/* Main Card */}
        {/* <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-48 lg:w-60 transform hover:scale-110 transition">
          <img
            src="src/assets/CD1.png"
            alt="Boosted NFT"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">Stella Nova</h3>
          <p className="text-gray-500 text-sm">Price: 142.02</p>
        </div> */}

        {/* Smaller Cards */}
        {/* <div className="absolute top-10 -left-16 rounded-lg shadow-lg p-3 w-36 lg:w-44 transform hover:scale-105 transition">
          <img
            src="src/assets/CD1.png"
            alt="Small NFT 1"
            className="w-full h-28 object-cover rounded-lg mb-3"
          />
          <h4 className="text-sm font-semibold">Stella Nova</h4>
        </div>
        <div className="absolute  top-2/3  rounded-lg shadow-lg p-3 w-36 lg:w-44 transform hover:scale-105 transition">
          <img
            src="src/assets/CD1.png"
            alt="Small NFT 2"
            className="w-full h-28 object-cover rounded-lg mb-3"
          />
          <h4 className="text-sm font-semibold">Stella Nova</h4>
        </div> */}

        {/* Arrows */}
        {/* <div className="absolute top-10 left-4 lg:left-12">
          <div className="w-6 h-6 bg-green-300 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-green-600"></div>
          </div>
        </div>
        <div className="absolute bottom-10 right-4 lg:right-12">
          <div className="w-6 h-6 bg-green-300 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-green-600"></div>
          </div>
          </div> */}
         </div>
    </section>
  );
};

export default BoostNFTs;
