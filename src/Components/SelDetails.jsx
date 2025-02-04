// import React from "react";
// import { Play } from 'lucide-react';
// const FeaturedCollection = () => {
//   const items = [
//     {
//       id: 1,
//       name: "Stella Nova",
//       image: "src/assets/fc1.png",
//       price: "42.02",
//     },
//     {
//       id: 2,
//       image: "src/assets/fc2.png",
//       name: "Stella Nova",
//       price: "42.02",
//     },
//     {
//       id: 3,
//       image: "src/assets/fc2.png",
//       name: "Stella Nova",
//       price: "42.02",
//     },
//     {
//       id: 4,
//       image: "src/assets/fc4.jfif",
//       name: "Stella Nova",
//       price: "42.02",
//     },
//     {
//         id: 5,
//         name: "Stella Nova",
//         image: "src/assets/fc1.png",
//         price: "42.02",
//       },
//       {
//         id: 6,
//         image: "src/assets/fc2.png",
//         name: "Stella Nova",
//         price: "42.02",
//       },
//       {
//         id: 7,
//         image: "src/assets/fc2.png",
//         name: "Stella Nova",
//         price: "42.02",
//       },
//       {
//         id: 8,
//         image: "src/assets/fc4.jfif",
//         name: "Stella Nova",
//         price: "42.02",
//       },
//   ];

//   return (
//     <div className="py-8 px-4 bg-black">
//       <h2 className="text-md text-center sm:text-3xl lg:text-[64px] font-bold md:text-4xl sm:text-left mb-4 uppercase">Recently Sold</h2>
//       <div className="relative">
//         <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
//           {/* <button className="bg-red-500 p-2 rounded-full text-white">
//             {"<"}
//           </button> */}
//         </div>
//         <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
//           <button className=" p- rounded-full text-white flex  ">
//            <div className="bg-red-500 sm:p-1 rounded-3xl rotate-180 "><Play/></div>  <div className="bg-red-500 ms-2 sm:p-1 rounded-3xl"><Play/></div>
//           </button>
//         </div>
//       </div>
//       <br />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4   ">
//         {items.map((item) => (
//          <div
//          key={item.id}
//          className="relative w-full xl:w-[290px] rounded-lg py-8 px-4 flex flex-col md:flex-col-3 items-center text-center bg-contain bg-center bg-no-repeat "
//          style={{
//            backgroundImage: "url('src/assets/Subtract.png')",
//            backgroundSize: '100% 80%'

//          }}
//        >
//          <div className="flex items-center mb-4 w-full relative top-7 lg:top-9">
//            <div className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm">
//              <img
//                src="src/assets/Auctionimg/A9.jfif"
//                alt=""
//                className="rounded-full w-full h-full object-cover"
//              />
//            </div>
//            <div className="ml-2">
//              <h3 className="font-semibold text-left uppercase">{item.name}</h3>
//              <p className="text-gray-500 text-sm text-left   ">@STELLA NOVA</p>
//            </div>
//          </div>
//          <div className="w-full mb-4 relative top-7 lg:top-6">
//            <img
//              src={item.image}
//              alt={item.name}
//              className="w-full h-auto rounded object-cover"
//            />
//          </div>
//          <div className="flex justify-between items-center w-full relative top-6 md:px-[7px] md:text-sm ">
//            <button className="bg-red-500 text-white py-1 px-3  sm:py-1 xl:px-6 rounded relative bottom-14 left-2 md:left-0 md:px-[7px] md:text-sm">
//              Buy
//            </button>
//            <p className="text-gray-700  px-2 lg:px-1 lg:py-1  rounded bg-white flex items-center gap-1 relative bottom-14 right-2 md:right-0">
//              Price:{" "}
//              <img
//                className="w-5 h-5 bg-black rounded-full"
//                src="src/assets/logo.png"
//                alt="logo"
//              />{" "}
//              ${item.price}
//            </p>
//          </div>
//        </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCollection;

import React from "react";
import { Twitter, Binoculars,ChevronDown } from "lucide-react";
import Cards from './Cards'
import Navbar2 from "./CreateNFT/Navbar2";
import Search from "./Search";
import Profile from "./ProfileSeller/Profile";



const NFTimg = () => {
  return (
    <div>
        <Navbar2/>
        <Profile/>
        
      <div className="flex flex-wrap gap-3 mx-20 mt-48  w-auto">
        <div className="p-1 border-black"> 

        <img src="src/assets/NT.png" alt="" />
        </div>
        <div className="w-fit lg:w-[674px] lg:h-[491px]">
          <h1 className="  text-center text-3xl md:text-left text-black md:text-[64px] uppercase my-3 ">
            Pixacio
          </h1>
          <div className="flex justify-between mt-3  text-gray-500 flex-wrap gap-2 md:gap-0 ">
            <div className="w-36 md:w-80 h-12 bg-white ms-1 py-3 rounded-lg flex justify-between shadow-xl">
              <h5 className="ms-1">Item listed</h5>
              <h5 className="mr-1 font-bold">3,027</h5>
            </div>
            <div className="w-36 md:w-80 h-12 bg-white mr-1 py-3 rounded-lg flex justify-between shadow-xl">
              <h5 className="ms-1">Nnm of Sold </h5>
              <h5 className="mr-1 font-bold"> 120</h5>
            </div>
          </div>
          <div className="w-36 md:w-80 h-12 bg-white ms-1 py-3 rounded-lg flex justify-between text-gray-500 mt-6 shadow-xl">
            <h5 className="ms-1">Vol FRY</h5>
            <h5 className="mr-1 font-bold">18.5 FRY</h5>
          </div>
          <div>
            <hr className="border-red-600 my-4" />
          </div>
          <div className="flex gap-1 flex-wrap flex-col-2">
            <button className="flex w-11 h-[42px] py-2 px-2 justify-between rounded-lg ms-1 bg-white shadow-xl">
              <img src="./internet.png" alt="" />
            </button>
            <button className="flex w-28 h-[42px] py-2 justify-between rounded-lg ms-1 ps-2 bg-white shadow-xl">
              <Twitter />{" "}
              <span className="bg-red-300 rounded-md mr-1 w-11">12.3k</span>
            </button>
            <button className="flex w-11 h-[42px] py-2 px-2 justify-between rounded-lg ms-1 bg-white shadow-xl">
              <img src="./Discord.png" alt="" />
            </button>
            <button className="flex w-28 h-[42px] py-2 justify-between rounded-lg ms-1 ps-2 bg-white shadow-xl">
              <Binoculars />{" "}
              <span className="bg-red-300 rounded-md mr-1 w-11">12.3k</span>
            </button>
          </div>
          <p className="text-gray-400 ms-1 my-4 text-xs md:text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            euismod vulputate ipsum, non molestie magna facilisis a. Cras
            tincidunt sem sed lorem dapibus laoreet. Curabitur vel lectus purus.
            In gravida eros ac aliquam facilisis. Suspendisse at elementum
            metus. Proin elementum maximus placerat. Suspendisse sapien justo,
            interdum sit amet sollicitudin quis, porttitor a metus. In eu
            accumsan dolor, eu venenatis eros. Aliquam erat volutpat. Etiam
            suscipit placerat mi. Mauris diam purus, sagittis eu feugiat eu,
            sodales a quam. Cras elit enim. 
          </p>
        </div>
        <div className="flex w-full justify-between">
        
            <ul className="flex justify-around w-[745px] ">
                <li className="-ms-9 hover:text-red-600 hover:underline w-9 "><a href="">All</a></li>
                <li><a href="">Generate</a></li>
                <li><a href="">Minted</a></li>
                <li><a href="">On Sale</a></li>
                <li><a href="">Auction</a></li>
                <li><a href="">Sold</a></li>
            </ul>
        
        <div > <button className="flex mr-2 border-red-600 border-[0.5px] p-2 text-red-600">Newest <ChevronDown/></button></div>
            
        </div>
        <Cards/>
      </div>
      <Search/>
    
    </div>
  );
};

export default NFTimg;
