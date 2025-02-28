// // FeaturedCollection.jsx
// import React from "react";

// const FeaturedCollection = () => {
//   const items = [
//     {
//       id: 1,
//       name: "Stella Nova",
//       image: "src/assets/NFT.jfif",
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
//       image: "src/assets/NFT.jfif",
//       name: "Stella Nova",
//       price: "42.02",
//     },
//     {
//       id: 4,
//       image: "src/assets/fc2.png",
//       name: "Stella Nova",
//       price: "42.02",
//     },
//     {
//         id: 5,
//         image: "src/assets/NFT.jfif",
//         name: "Stella Nova",
//         price: "42.02",
//       },
//       {
//         id: 6,
//         image:"src/assets/NFT.jfif",
//         name: "Stella Nova",
//         price: "42.02",
//       },
//       {
//         id: 7,
//         image: "src/assets/NFT.jfif",
//         name: "Stella Nova",
//         price: "42.02",
//       },
//       {
//         id: 8,
//         image: "src/assets/fc4.jfif",
//         name: "Stella Nova",
//         price: "42.02",
//       },

// ];

//   return (
//     <div className=" py-8 px-4 h-auto">
//       <h2 className="text-2xl font-bold text-left mb-4">Trending NFT’s</h2>

//       <div className="relative">

//         <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
//           <button className=" border-2 border-red-500 relative bottom-4 p-2 rounded text-red-600">
//             {'Last 30 Minutes'} <a href=""></a>
//           </button>
//         </div>
//       </div>
//       <br />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ]">
//         {items.map((item) => (
//           <div
//             key={item.id}

//             className="w-auto rounded-lg py-8 px-1 flex flex-col items-center text-center  bg-no-repeat bg-[url('E:\NewApp\src\assets\Subtract.png')]"
//           >

//             <h3 className="font-semibold mt-4">{item.name}</h3>
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-fit   relative object-cover rounded-md"
//             />
//             {/* <h3 className="font-semibold mt-4">{item.name}</h3> */}
//             <div className="flex justify-between items-center w-full mt-2">
//               <button className="bg-red-500 text-white py-1 px-4 relative bottom-12 left-2 rounded">
//                 Buy
//               </button>
//               <p className="text-gray-700  rounded relative bottom-12 px-1 right-2 bg-white  flex gap-1">
//                 Price :{" "}
//                 <img
//                   className="w-5 h-5 m-1 bg-black rounded-full"
//                   src="src/assets/logo.png"
//                 />{" "}
//                 {item.price}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCollection;

// import React from "react";

// const FeaturedCollection = () => {
//   const items = [
//     {
//       id: 1,
//       name: "Stella Nova",
//       image: "src/assets/NFT.jfif",
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
//       image: "src/assets/NFT.jfif",
//       name: "Stella Nova",
//       price: "42.02",
//     },
//     {
//       id: 4,
//       image: "src/assets/fc2.png",
//       name: "Stella Nova",
//       price: "42.02",
//     },
//     {
//       id: 5,
//       image: "src/assets/NFT.jfif",
//       name: "Stella Nova",
//       price: "42.02",
//     },
//     {
//       id: 6,
//       image: "src/assets/NFT.jfif",
//       name: "Stella Nova",
//       price: "42.02",
//     },
//     {
//       id: 7,
//       image: "src/assets/NFT.jfif",
//       name: "Stella Nova",
//       price: "42.02",
//     },
//     {
//       id: 8,
//       image: "src/assets/fc4.jfif",
//       name: "Stella Nova",
//       price: "42.02",
//     },
//   ];

//   return (
//     <div className=" bg-gradient-to-r from-white to-pink-100 py-8 px-4 sm:px-6 lg:px-8">
//       <h2 className="text-2xl font-bold text-left mb-4">Trending NFT’s</h2>

//       <div className="relative bottom-7 mb-6">
//         <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
//           <button className="border-2 border-red-500 p-2 rounded text-red-600">
//             Last 30 Minutes
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {items.map((item) => (
//          <div
//          key={item.id}
//          className="w-full rounded-lg p-4 flex flex-col items-center text-center bg-no-repeat bg-cover bg-[url('E:/NewApp/src/assets/Subtract.png')] overflow-hidden"
//        >
//          <div className="w-full h-48 flex items-center justify-center">
//             {/* Imgae  */}
//            <img
//              src={item.image}
//              alt={item.name}
//              className="w-full  h-full object-cover rounded-md mt-9"
//            />
//          </div>
//          <h3 className="font-semibold mt-4 text-lg">{item.name}</h3>
//          <div className="flex justify-between items-center w-full mt-2">
//            <button className="bg-red-500 text-white py-1 px-4 rounded">
//              Buy
//            </button>
//            <p className="text-gray-700 flex items-center gap-1 bg-white p-2 rounded">
//              Price:{" "}
//              <img
//                className="w-5 h-5 bg-black rounded-full"
//                src="src/assets/logo.png"
//                alt="logo"
//              />{" "}
//              {item.price}
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

const FeaturedCollection = () => {
  const items = [
    {
      id: 1,
      name: "Stella Nova",
      image: "src/assets/NFT.jfif",
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
      image: "src/assets/NFT.jfif",
      name: "Stella Nova",
      price: "42.02",
    },
    {
      id: 4,
      image: "src/assets/fc2.png",
      name: "Stella Nova",
      price: "42.02",
    },
    {
      id: 5,
      image: "src/assets/NFT.jfif",
      name: "Stella Nova",
      price: "42.02",
    },
    {
      id: 6,
      image: "src/assets/NFT.jfif",
      name: "Stella Nova",
      price: "42.02",
    },
    {
      id: 7,
      image: "src/assets/NFT.jfif",
      name: "Stella Nova",
      price: "42.02",
    },
    {
      id: 8,
      image: "src/assets/fc4.jfif",
      name: "Stella Nova",
      price: "42.02",
    },
  ];

  return (
    <div className=" py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-center mx-auto max-w-6xl">
      <h2 className=" text-center text-2xl font-bold sm:text-left sm:text-4xl mb-6 md:text-[400%] uppercase ">
        Trending NFT’s
      </h2>

      {/* <div className="flex justify-center sm:justify-end mb-6 relative sm:right-16 md:right-0">
        <button className="border-2 border-red-500 p-1 sm:p-2 rounded text-red-600 hover:bg-red-700 hover:text-white">
          Last 30 Minutes
        </button>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4   ">
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
    </div>
  );
};

export default FeaturedCollection;
