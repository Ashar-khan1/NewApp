import React from "react";
import {Link} from 'react-router-dom'

// import { ArrowUpRigh } from 'lucide-react';

const AuctionGrid = () => {
  const items = [
    {
      id: 1,
      name: "Stella Nova",
      image: "src/assets/fc1.png",
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
      image: "src/assets/fc2.png",
      name: "Stella Nova",
      price: "42.02",
    },
    {
      id: 4,
      image: "src/assets/fc4.jfif",
      name: "Stella Nova",
      price: "42.02",
    },
  ];
  return (
    <div className="flex flex-col justify-center mx-auto max-w-6xl">
      <h1 className="text-3xl text-center font-bold text-black sm:text-left sm:text-5xl uppercase md:text-[64px] xl:relative left-2 xl:w-72 ">Auction</h1>      {/* <left-20></left-20>*/}

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4   ">
        {items.map((item) => (
         <div
         key={item.id}
         className="relative max-w-64 xl:w-[270px] rounded-lg py-8 px-4 flex flex-col md:flex-col-3 items-center text-center bg-contain bg-center bg-no-repeat "
         style={{
           backgroundImage: "url('src/assets/Subtract.png')",
           backgroundSize: '100% 80%'
         
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
      <div className="w-[100%] flex justify-center text-white"> 
        <button></button>
        
        <Link to='/nft'>
      <button className="  bg-red-600 px-3 py-2 mt-2 rounded-md">Explore More </button>
        </Link>
        

      </div>
    </div>
  );
};

export default AuctionGrid;
