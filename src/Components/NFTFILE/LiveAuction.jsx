import React from "react";

const AuctionGrid = () => {
  const cards = [
    { id: 1, image: "/Auction/A1.png", name: "STELLA NOVA" },
    { id: 3, image: "/Top/A3.png", name: "STELLA NOVA" },
    { id: 2, image: "/Auction/A2.png", name: "STELLA NOVA" },
    { id: 4, image: "/Auction/A4.jfif", name: "STELLA NOVA" },
    { id: 5, image: "/Top/A1.png", name: "STELLA NOVA" },
    { id: 6, image: "/Top/A3.png", name: "STELLA NOVA" },
    { id: 7, image: "/Top/A4.png", name: "STELLA NOVA" },
    { id: 8, image: "/Top/A5.png", name: "STELLA NOVA" },
    { id: 9, image: "/Top/A6.png", name: "STELLA NOVA" },
    { id: 10, image: "/Top/A8.png", name: "STELLA NOVA" },
    { id: 11, image: "/Top/A4.png", name: "STELLA NOVA" },
    { id: 12, image: "/Top/A7.jfif", name: "STELLA NOVA" },
  ];
  return (
    <div className="bg-gradient-to-r from-white to-pink-100 py-10 px-4 ">
      <h1 className="text-3xl font-bold text-black text-center mb-8 uppercase sm:text-left  xl:ms-36 lg:text-[50px] xl:text-[64px] ">Live Auction</h1>

      
      <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className=" shadow-lg rounded-lg p-4 relative bg-no-repeat"
            // className="relative w-full xl:w-[290px] rounded-lg py-8 px-4 flex flex-col md:flex-col-3 items-center text-center bg-contain bg-center bg-no-repeat "
            style={{
              backgroundImage: "url('src/assets/Subtract.png')",
              backgroundSize: '100% 100%'
            
            }}
          >
            {/* Header */}
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                <img
                  src="public/Top/A9.jfif"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-lg">{card.name}</h3>
                <p className="text-gray-500 text-sm ">@{card.name}</p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={card.image}
                alt="Avatar"
                className="rounded-lg w-full h-60 object-cover"
              />{" "}
              <button className=" p-2 absolute bottom-2 left-1 bg-white text-black text-xs px-3 py-1 rounded-lg">
              In Stock <span className="text-gray-500">7</span> 
              </button>
              <button className=" p-2 absolute bottom-2 right-1 bg-white text-black text-xs px-3 py-1 rounded-lg flex gap-1">
              Price:  <img src="./group.png" className="bg-black rounded-full w-3 h-3 mt-1" /> <span className="text-gray-500 "> 142.02</span>
              </button>
              {/* Countdown */}
              {/* <h1 className="relative top-9 bg-white text-black text-s px-5 py-1 rounded-lg"> */}
              <div className="flex justify-center">

              <h1 className="bg-white absolute top-2/3    bg-opacity-50 text-black text-s px-5 py-1 rounded-lg">    
              3:06:59:18
              </h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      
    </div>
  );
};

export default AuctionGrid;



