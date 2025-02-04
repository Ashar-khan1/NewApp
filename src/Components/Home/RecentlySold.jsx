// import React from "react";

// const AuctionGrid = () => {
//   const cards = [
//     { id: 1, image: "src/assets/Auctionimg/A1.png", name: "STELLA NOVA" },
//     { id: 2, image: "src/assets/Auctionimg/A2.png", name: "STELLA NOVA" },
//     { id: 3, image: "src/assets/Auctionimg/A3.png", name: "STELLA NOVA" },
//     { id: 4, image: "src/assets/Auctionimg/A4.png", name: "STELLA NOVA" },
//     { id: 5, image: "src/assets/Auctionimg/A5.png", name: "STELLA NOVA" },
//     { id: 6, image: "src/assets/Auctionimg/A6.png", name: "STELLA NOVA" },
//     { id: 7, image: "src/assets/Auctionimg/A7.jfif", name: "STELLA NOVA" },
//     { id: 8, image: "src/assets/Auctionimg/A8.png", name: "STELLA NOVA" },
//   ];
//   return (
//     <div className=" py-10 px-4">
//       <h1 className="text-3xl font-bold text-black text-left  xl:relative xl:left-40 lg:w-3/4 md:text-[64px] uppercase mb-8">Recently Sold</h1>

      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto  ">
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             className="rounded-lg p-4 relative bg-no-repeat w-[290px] lg:w-[250px] xl:w-[290px] h-[390px] ms-3 gap"
//             style={{
//               backgroundImage: "url('src/assets/Subtract.png')",
//               backgroundSize: '100% 100%'
            
//             }}
//           >
//             {/* Header */}
//             <div className="flex items-center mb-3">
//               <div className="h-10 w-10 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
//                 <img
//                   src="src/assets/Auctionimg/A9.jfif"
//                   alt=""
//                   className="rounded-full"
//                 />
//               </div>
//               <div className="ml-1 mt-1">
//                 <h3 className="font-bold text-md">{card.name}</h3>
//                 <p className="text-gray-500 text-xs">@{card.name}</p>
//               </div>
//             </div>

//             {/* Image */}
//             <div className="relative">
//               <img
//                 src={card.image}
//                 alt="Avatar"
//                 className="rounded-lg w-[307px] h-[300px] object-cover"
//               />{" "}
//               {/* <button className="absolute top-5 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg">
//                 Sold
//               </button> */}
//               {/* Countdown */}
//               <div className="flex justify-center">

//               <h1 className="absolute top-2/3    bg-red-500 text-white text-lg px-5 py-1 rounded-lg">
//                 Sold
//               </h1>
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








import React from "react";
const FeaturedCollection = () => {
  const items = [
    {
      id: 1,
      name: "Stella Nova",
      image: "src/assets/fc4.jfif",
      price: "42.02",
    },
    {
      id: 2,
      image: "src/assets/fc2.png",
      name: "Stella Nova", 
      price: "42.02",
    },
    {
      id: 3,
      image: "src/assets/Auctionimg/A7.jfif",
      name: "Stella Nova",
      price: "42.02",
    },
    {
      id: 4,
      image: "src/assets/Auctionimg/A7.jfif",
      name: "Stella Nova",
      price: "42.02",
    },
    {
        id: 5,
        name: "Stella Nova",
        image: "src/assets/Auctionimg/A6.png",
        price: "42.02",
      },
      {
        id: 6,
        image: "src/assets/Auctionimg/A7.jfif",
        name: "Stella Nova", 
        price: "42.02",
      },
      {
        id: 7,
        image: "src/assets/fc2.png",
        name: "Stella Nova",
        price: "42.02",
      },
      {
        id: 8,
        image: "src/assets/Auctionimg/A8.png",
        name: "Stella Nova",
        price: "42.02",
      },
  ];

  return (
    <div className="py-8 px-4 flex flex-col justify-center mx-auto max-w-6xl ">  
      <h2 className="text-md text-center sm:text-3xl lg:text-[64px] font-bold md:text-4xl sm:text-left  uppercase">Recently Sold</h2>
      <div className="relative">
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative xl:left-8  ">
        {items.map((item) => (
         <div
         key={item.id}
         className="relative max-w-64  xl:w-[270px]  rounded-lg py-8 px-4 flex flex-col md:flex-col-3 items-center text-center bg-contain bg-center bg-no-repeat "
         style={{
           backgroundImage: "url('src/assets/Subtract.png')",
           backgroundSize: '100% 80%',
            // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
         
         }}
       >
         <div className="flex items-center mb-4 w-full relative top-7 lg:top-9">
           <div className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm">
             <img
               src="src/assets/Auctionimg/A9.jfif"
               alt=""
               className="rounded-full w-full h-full object-cover"
             />
           </div>
           <div className="ml-2">
             <h3 className="font-semibold text-left uppercase">{item.name}</h3>
             <p className="text-gray-500 text-sm text-left   ">@STELLA NOVA</p>
           </div>
         </div>
         <div className="w-full mb-4 relative top-7 lg:top-6">
           <img
             src={item.image}
             alt={item.name}
             className="w-full h-auto rounded object-cover"
           />
         </div>
         <div className="flex justify-between items-center w-full relative top-6 md:px-[7px] md:text-sm ">
           <button className="bg-red-500 text-white py-1 px-3  sm:py-1 xl:px-6 rounded relative bottom-14 left-2 md:left-0 md:px-[7px] md:text-sm">
             Buy
           </button>
           <p className="text-gray-700  px-2 lg:px-1 lg:py-1  rounded bg-white flex items-center gap-1 relative bottom-14 right-2 md:right-0">
             Price:{" "}
             <img
               className="w-5 h-5 bg-black rounded-full"
               src="src/assets/logo.png"
               alt="logo"
             />{" "}
             ${item.price}
           </p>
         </div>
       </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollection;