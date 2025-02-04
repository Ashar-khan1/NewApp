// import React from "react";

// const AuctionGrid = () => {
//   const cards = [
//     { id: 1, image: "public/Auction/A1.png", name: "STELLA NOVA" },
//     { id: 3, image: "public/Top/A3.png", name: "STELLA NOVA" },
//     { id: 2, image: "public/Auction/A2.png", name: "STELLA NOVA" },
//     { id: 4, image: "public/Auction/A4.jfif", name: "STELLA NOVA" },
//     { id: 5, image: "public/Top/A1.png", name: "STELLA NOVA" },
//     { id: 6, image: "public/Top/A3.png", name: "STELLA NOVA" },
//     { id: 7, image: "public/Top/A4.png", name: "STELLA NOVA" },
//     { id: 8, image: "public/Top/A5.png", name: "STELLA NOVA" },
//     { id: 9, image: "public/Top/A6.png", name: "STELLA NOVA" },
//     { id: 10, image: "public/Top/A8.png", name: "STELLA NOVA" },
//     { id: 11, image: "public/Top/A4.png", name: "STELLA NOVA" },
//     { id: 12, image: "public/Top/A7.jfif", name: "STELLA NOVA" },
//   ];
//   return (
//     <div className="bg-gradient-to-r from-white to-pink-100 py-10 px-4">
//       <h1 className="text-2xl sm:text-3xl font-bold text-black text-center sm:text-left xl:ms-20 2xl:ms-44 2xl:text-5xl mb-8 uppercase md:text-[40px] lg:text-[50px] xl:text-[64px]">
//         Top Listed
//       </h1>
//       <div className="w-1/4 hidden lg:block"></div>
//       <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             className="bg-white shadow-lg rounded-lg p-4 relative"
//           >
//             {/* Header */}
//             <div className="flex items-center mb-4">
//               <div className="h-10 w-10 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
//                 <img src="/Top/A9.jfif" alt="" className="rounded-full" />
//               </div>
//               <div className="ml-4">
//                 <h4 className="font-semibold text-md">{card.name}</h4>
//                 <p className="text-gray-500 text-sm">@{card.name}</p>
//               </div>
//             </div>

//             {/* Image */}
//             <div className="relative">
//               <img
//                 src={card.image}
//                 alt="Avatar"
//                 className="rounded-lg w-full h-60 object-cover"
//               />{" "}
//               <button className=" p-2 absolute bottom-2 left-1 bg-white text-black text-xs px-3 py-1 rounded-lg">
//                 In Stock <span className="text-gray-500">7</span>
//               </button>
//               <button className=" p-2 absolute bottom-2 right-1 bg-white text-black text-xs px-3 py-1 rounded-lg flex gap-1">
//                 Price:{" "}
//                 <img
//                   src="public/group.png"
//                   className="bg-black rounded-full w-3 h-3 mt-1"
//                 />{" "}
//                 <span className="text-gray-500 "> 142.02</span>
//               </button>
//               {/* Countdown */}
//               <div className="flex justify-center">
//                 <h1 className="align-middle absolute top-2/3   flex justify-center     bg-white bg-opacity-50 text-black text-s px-5 py-1 rounded-lg">
//                   3:06:59:18
//                 </h1>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Button */}
//     </div>
//   );
// };

// export default AuctionGrid;










import React, { useState } from "react";
import { ChevronDown, Filter } from "lucide-react";

const FilterMenu = () => {
  const [expanded, setExpanded] = useState(false);

  const filterOptions = [
    { name: "Popular", count: 15  },
    { name: "Price", count: null },
    { name: "Background", count: 20 },
    { name: "Clothing", count: 110 },
    { name: "Eye", count: 2 },
    { name: "Body Color", count: 11 },
    { name: "Head", count: 33 },
  ];

  return (
    <div className="w-48 absolute left-2 bg-white rounded-lg shadow-sm p-4">
      <div>
        <button
          className="w-full flex items-center justify-between active:shadow-lg text-gray-600 hover:bg-gray-50 rounded p-2"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="flex items-center gap-1">
            <Filter size={16} />
            Filters
          </span>
          <ChevronDown size={16} />
        </button>
      </div>

      {expanded && (
        <div className="flex flex-col space-y-2 mt-4  shadow-md">
          {filterOptions.map((option) => (
            <button
              key={option.name}
              className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 text-sm"
            >
              <span className="text-gray-700">{option.name}</span>
              {option.count !== null && (
                <span className="text-gray-500 text-xs text-right ">{option.count}</span>
              )}
              <ChevronDown size={14} className="text-gray-400" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const AuctionGrid = () => {
  const cards = [
    { id: 1, image: "public/Auction/A1.png", name: "STELLA NOVA" },
    { id: 3, image: "public/Top/A3.png", name: "STELLA NOVA" },
    { id: 2, image: "public/Auction/A2.png", name: "STELLA NOVA" },
    { id: 4, image: "public/Auction/A4.jfif", name: "STELLA NOVA" },
    { id: 5, image: "public/Top/A1.png", name: "STELLA NOVA" },
    { id: 6, image: "public/Top/A3.png", name: "STELLA NOVA" },
    { id: 7, image: "public/Top/A4.png", name: "STELLA NOVA" },
    { id: 8, image: "public/Top/A5.png", name: "STELLA NOVA" },
    { id: 9, image: "public/Top/A6.png", name: "STELLA NOVA" },
    { id: 10, image: "public/Top/A8.png", name: "STELLA NOVA" },
    { id: 11, image: "public/Top/A4.png", name: "STELLA NOVA" },
    { id: 12, image: "public/Top/A7.jfif", name: "STELLA NOVA" },
  ];

  return (
    <div className="bg-gradient-to-r from-white to-pink-100 py-10 px-4">
      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
        {/* FilterMenu on the left */}
        <div className="w-48 hidden lg:block">
          <FilterMenu />
        </div>

        {/* Title and Cards */}
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font- text-black text-center lg:text-left lg:-ms-20 2xl:ms-44 2xl:text-5xl mb-8 uppercase md:text-[40px] lg:text-[50px] xl:text-[64px]">
            Top Listed
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:-ms-20">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-whit max-w-72 shadow-lg rounded-lg p-4 relative h-[100%] bg-no-repeat"
                // className="relative w-full xl:w-[290px] rounded-lg py-8 px-4 flex flex-col md:flex-col-3 items-center text-center bg-contain bg-center bg-no-repeat "
                style={{
                  backgroundImage: "url('src/assets/Subtract.png')",
                  backgroundSize: '100% 100%'
                
                }} >
                
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    <img
                      src="/Top/A9.jfif"
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-md">{card.name}</h4>
                    <p className="text-gray-500 text-sm">@{card.name}</p>
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <img
                    src={card.image}
                    alt="Avatar"
                    className="rounded-lg w-full h-60 object-cover"
                  />
                  <button className="p-2 absolute bottom-2 left-1 bg-white text-black text-xs px-3 py-1 rounded-lg">
                    In Stock <span className="text-gray-500">7</span>
                  </button>
                  <button className="p-2 absolute bottom-2 right-1 bg-white text-black text-xs px-3 py-1 rounded-lg flex gap-1">
                    Price:{" "}
                    <img
                      src="public/group.png"
                      className="bg-black rounded-full w-3 h-3 mt-1"
                    />{" "}
                    <span className="text-gray-500">142.02</span>
                  </button>

                  {/* Countdown */}
                  <div className="flex justify-center">
                    <h1 className="align-middle absolute top-2/3 flex justify-center bg-white bg-opacity-50 text-black text-s px-5 py-1 rounded-lg">
                      3:06:59:18
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionGrid;


