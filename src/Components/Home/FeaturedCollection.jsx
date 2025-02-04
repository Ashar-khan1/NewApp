// // FeaturedCollection.jsx
// import React from "react";

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
//   ];

//   return (
//     <div className=" py-8 px-4 ">
//       <h2 className="text-2xl font-bold text-left mb-4">FEATURED COLLECTION</h2>
//       <p className="text-left text-gray-600 mb-8">
//         Explore our exclusive featured collection, showcasing innovative
//         campaigns and creative storytelling from top brands around the world.
//       </p>

//       <div className="relative">
//         <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
//           <button className="bg-red-500 p-2 rounded-full text-white ">
//             {"<"}
//           </button>
//         </div>
//         <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
//           <button className="bg-red-500 p-2 rounded-full text-white">
//             {">"}
//           </button>
//         </div>
//       </div>
//       <br />
//       <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 ]">
//         {items.map((item) => (
//           <div
//             key={item.id}
//             className=" w-auto col- rounded-lg  py-8 px-1 flex flex-col items-center text-center min-h-76 bg-no-repeat bg-[url('src/assets/Subtract.png')]" //Only for shadow card shadow-md//
//           >
//             <div className="flex items-center mb-1 relative right-14">
//               <div className="h-10 w-10 rounded-full flex items-center justify-center  text-white font-bold text-sm">
//                 <img
//                   src="src/assets/Auctionimg/A9.jfif"
//                   alt=""
//                   className="rounded-full "
//                 />
//               </div>
//               <div className="">
//                 <h3 className="font-semibold ">{item.name}</h3>

//                 <p className="text-gray-500 text-sm">@STELLA NOVA</p>
//               </div>
//             </div>
//             <div className="">
//               <img
//                 src={item.image}
//                 // alt={item.name}
//                 className="h- rounded"
//               />
//             </div>
//             <div className="flex justify-between items-center w-full mt-2">
//               <button className="bg-red-500 text-white py-1 px-3 relative bottom-14 left-2 rounded">
//                 Buy
//               </button>
//               <p className="text-gray-700 font-bold relative bottom-14 px-1 right-2 rounded bg-white  flex gap-1">
//                 Price :{" "}
//                 <img
//                   className="w-5 h-5 m-1 bg-black rounded-full"
//                   src="src/assets/logo.png"
//                 />{" "}
//                 ${item.price}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCollection;





import React from "react";
import { Play } from 'lucide-react';
import { Link } from "react-router";
const FeaturedCollection = () => {
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
    <div className="py-8 px-4  flex flex-col justify-center mx-auto max-w-6xl">  
      <h2 className="text-md text-center sm:text-3xl lg:text-[64px] font-bold md:text-4xl sm:text-left mb-4">FEATURED COLLECTION</h2>
      <p className="text-xs text-center sm:text-lg sm:text-left text-gray-600 mb-8">
        Explore our exclusive featured collection, showcasing innovative
        campaigns and creative storytelling from top brands around the world.
      </p>

      <div className="relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          {/* <button className="bg-red-500 p-2 rounded-full text-white">
            {"<"} 
          </button> */}
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <button className=" p- rounded-full text-white flex  ">
           <div className="bg-red-500 sm:p-1 rounded-3xl rotate-180 "><Play/></div>  <div className="bg-red-500 ms-2 sm:p-1 rounded-3xl"><Play/></div> 
          </button>
        </div>
      </div>
      <br />
        <Link to='nftimg'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4    ">
      
        {items.map((item) => (
         <div
         key={item.id}
         className=" relative max-w-64 xl:w-[270px] rounded-lg py-8 px-4 flex flex-col md:flex-col-3 items-center text-center bg-contain bg-center bg-no-repeat "
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
        </Link>
    </div>
  );
};

export default FeaturedCollection;