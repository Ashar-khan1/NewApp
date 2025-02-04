import React from "react";

const ImaginationAsset = () => {
  const images = [
    "src/assets/IA/IA1.jfif",
    "src/assets/fc4.jfif",
    "src/assets/Auctionimg/A3.png",
    "src/assets/Auctionimg/A8.png",
    "src/assets/NFT.jfif",
    "src/assets/TS/TS4.png",
    "src/assets/TS/TS2.png",
    "src/assets/TS/TS5.png",
  ];

  return (
    <div className="bg-gradient-to-b from-white via-pink-50 to-pink-100 min-h-screen flex flex-col items-center justify-center px-4">
      {/* Header */}
      <h1 className="text-3xl md:text-5xl font-bold text-black text-center mb-6">
        TURN YOUR IMAGINATION <br /> INTO DIGITAL ASSET
      </h1>

      {/* Search Bar */}
      <div className="relative w-full max-w-xl mb-8">
        <input
          type="text"
          placeholder="Fantasy Creature holding a sword..."
          className="w-full py-3 px-4 rounded-full shadow-lg focus:outline-none text-gray-700"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded-full font-bold hover:bg-red-600 transition duration-300">
          Generate 🚀
        </button>
      </div>

      {/* Floating Images */}
      <div className="relative max-w-screen-lg w-full">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8 absolute top-0 left-0 transform -translate-y-10 -translate-x-6">
          {images.slice(2, 4).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`img-${index}`}
              className="w-20 h-20 rounded-lg shadow-md object-cover"
            />
          ))}
          
        </div>
        <div className="grid grid-cols-1 gap-4 absolute bottom-24 left-0 transform -translate-y-20">
  {images.slice(0, 2).map((img, index) => (
    <div
      key={index}
      className="flex flex-col items-center space-y-4"
    >
      <img
        src={img}
        alt={`img-${index}`}
        className="w-20 h-20 rounded-lg shadow-md object-cover"
      />
    </div>
  ))}
</div>

        

      
        <div className="grid grid-cols-3 md:grid-cols-4  absolute -bottom-1 -right-2 transform translate-y-14 translate-x- gap-10 ">
          {images.slice(4, 6).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`img-${index}`}
              className="w-20 h-20 rounded-lg shadow-md object-cover"
            />
          ))}
          
        </div>
      
        <div className="grid grid-cols-3 md:grid-cols-4  absolute bottom-64 right-10 transform translate-y-14 translate-x-36 gap-7 ">
          {images.slice(6, 8).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`img-${index}`}
              className="w-20 h-20 rounded-lg shadow-md object-cover"
            />
          ))}
          
        </div>
        {/* <div className="grid grid-cols-3 md:grid-cols-4 gap-4 absolute  left-[790px] transform -translate-y-60 tra">{images.slice(6, 8).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`img-${index}`}
              className="w-20 h-20 rounded-lg shadow-md object-cover"
            />
          ))}</div> */}
      </div>
    </div>
  );
};

export default ImaginationAsset;
