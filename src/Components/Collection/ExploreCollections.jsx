// import React from "react";
// // import './App.css'; // Add additional custom styling if needed
// import { Check } from 'lucide-react';
// const App = () => {
//   const collections = [
//     {
//       id: 1,
//       title: "WONDERFUL ARTWORK",
//       creator: "Jacob Jones",
//       creatorImage: "Collection/P1.jfif",
//       isVerified: true,
//       image: "Collection/P2.jfif",
//       items: "1.5k",
//     },
//     {
//       id: 1,
//       title: "WONDERFUL ARTWORK",
//       creator: "Jacob Jones",
//       creatorImage: "Collection/P1.jfif",
//       isVerified: true,
//       image: "Collection/P8.jfif",
//       items: "1.5k",
//     },
//     {
//       id: 1,
//       title: "WONDERFUL ARTWORK",
//       creator: "Jacob Jones",
//       creatorImage: "Collection/P1.jfif",
//       isVerified: true,
//       image: "Collection/P3.jfif",
//       items: "1.5k",
//     },
//     {
//       id: 1,
//       title: "WONDERFUL ARTWORK",
//       creator: "Jacob Jones",
//       creatorImage: "Collection/P1.jfif",
//       isVerified: true,
//       image: "Collection/P4.jfif",
//       items: "1.5k",
//     },
//     {
//       id: 1,
//       title: "WONDERFUL ARTWORK",
//       creator: "Jacob Jones",
//       creatorImage: "Collection/P1.jfif",
//       isVerified: true,
//       image: "Collection/P5.jfif",
//       items: "1.5k",
//     },
//     {
//       id: 1,
//       title: "WONDERFUL ARTWORK",
//       creator: "Jacob Jones",
//       creatorImage: "Collection/P1.jfif",
//       isVerified: true,
//       image: "Collection/P6.jfif",
//       items: "1.5k",
//     },
//     {
//       id: 1,
//       title: "WONDERFUL ARTWORK",
//       creator: "Jacob Jones",
//       creatorImage: "Collection/P1.jfif",
//       isVerified: true,
//       image: "Collection/P7.jfif",
//       items: "1.5k",
//     },
//     {
//       id: 1,
//       title: "WONDERFUL ARTWORK",
//       creator: "Jacob Jones",
//       creatorImage: "Collection/P2.jfif",
//       isVerified: true,
//       image: "Collection/P8.jfif",
//       items: "1.5k",
//     },
//     {
//       id: 1,
//       title: "WONDERFUL ARTWORK",
//       creator: "Jacob Jones",
//       creatorImage: "Collection/P1.jfif",
//       isVerified: true,
//       image: "Collection/P1.jfif",
//       items: "1.5k",
//     },
//     {
//       id: 1,
//       title: "WONDERFUL ARTWORK",
//       creator: "Jacob Jones",
//       creatorImage: "Collection/P1.jfif",
//       isVerified: true,
//       image: "Collection/P3.jfif",
//       items: "1.5k",
//     },
//     {
//       id: 1,
//       title: "WONDERFUL ARTWORK",
//       creator: "Jacob Jones",
//       creatorImage: "Collection/P1.jfif",
//       isVerified: true,
//       image: "Collection/P4.jfif",
//       items: "1.5k",
//     },

//   ];

//   return (
//     <div className="bg-gradient-to-b from-white to-pink-100 p-6">
//       {/* Explore Collections Section */}
//       <div className="container mx-auto my-10">
//         <h2 className="text-center text-xl sm:text-3xl font-bold sm:text-left mb-6 md:text-5xl lg:text-[64px] uppercase">Explore Collections</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {collections.map((collection) => (
//             <div
//               key={collection.id}
//               className=" border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-lg"
//             >
//               <div className="p-4">
//                 <div className="flex items-center mb-4">
//                   <img
//                     src={collection.creatorImage}
//                     alt={collection.creator}
//                     className="w-10 h-10 rounded-full mr-3"
//                   />
//                   <div>
//                     <h3 className="font-semibold text-base">{collection.title}</h3>
//                     <p className="text-gray-500 text-sm">
//                       Created by <span className="font-medium text-gray-700">{collection.creator}</span>
//                       {collection.isVerified && (
//                         <span className="ml-1 rounded-full bg-blue-500">✔ <Check /></span>
//                       )}
//                     </p>
//                   </div>
//                 </div>
//                 <img
//                   src={collection.image}
//                   alt={collection.title}
//                   className="w-full h-48 object-cover rounded-md mb-4"
//                 />
//                 <div className="flex justify-center  bg-white">
//                   <span className="bg-gray-100 inline relative bottom-11   text-gray-700 px-3 py-1 rounded-t-md text-sm">
//                     Items {collection.items}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;




import React, { useState } from "react";
import { Menu, X, Check } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Popular", isActive: true },
    { name: "Trending", isActive: false },
    { name: "Sports", isActive: false },
    { name: "Art", isActive: false },
    { name: "Fantasy", isActive: false },
    { name: "Photography", isActive: false },
    { name: "Space", isActive: false },
  ];

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                className={`px-3 py-2 rounded-md text-sm font-medium
                  ${
                    item.isActive
                      ? "text-red-500 border border-red-500"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium
                    ${
                      item.isActive
                        ? "text-red-500 border border-red-500"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const App = () => {
  const collections = [
    {
      id: 1,
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "Collection/P1.jfif",
      isVerified: true,
      image: "Collection/P2.jfif",
      items: "1.5k",
    },
    {
      id: 2,
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "Collection/P1.jfif",
      isVerified: true,
      image: "Collection/P8.jfif",
      items: "1.5k",
    },
    {
      id: 3,
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "Collection/P1.jfif",
      isVerified: true,
      image: "Collection/P3.jfif",
      items: "1.5k",
    },
    {
      id: 3,
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "Collection/P1.jfif",
      isVerified: true,
      image: "Collection/P3.jfif",
      items: "1.5k",
    },
    {
      id: 3,
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "Collection/P1.jfif",
      isVerified: true,
      image: "Collection/P3.jfif",
      items: "1.5k",
    },
    {
      id: 3,
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "Collection/P1.jfif",
      isVerified: true,
      image: "Collection/P3.jfif",
      items: "1.5k",
    },
    {
      id: 3,
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "Collection/P1.jfif",
      isVerified: true,
      image: "Collection/P3.jfif",
      items: "1.5k",
    },
    {
      id: 3,
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "Collection/P1.jfif",
      isVerified: true,
      image: "Collection/P3.jfif",
      items: "1.5k",
    },
    {
      id: 3,
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "Collection/P1.jfif",
      isVerified: true,
      image: "Collection/P3.jfif",
      items: "1.5k",
    },
    {
      id: 3,
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "Collection/P1.jfif",
      isVerified: true,
      image: "Collection/P3.jfif",
      items: "1.5k",
    },
    {
      id: 3,
      title: "WONDERFUL ARTWORK",
      creator: "Jacob Jones",
      creatorImage: "Collection/P1.jfif",
      isVerified: true,
      image: "Collection/P3.jfif",
      items: "1.5k",
    },
    // Add more collection objects here
  ];

  return (
    <div className="bg-gradient-to-b from-white to-pink-100">
      {/* Navigation Bar */}
     

      {/* Explore Collections Section */}
      <div className="container mx-auto my-10 px-4">
        <h2 className="text-center text-xl sm:text-3xl font-bold sm:text-left mb-6 md:text-5xl lg:text-[64px] uppercase">
          Explore Collections
        </h2>
        <NavBar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-lg h-[220px] "
            >
              <div className="p-4">
                <div className="flex items-center mb-">
                  <img
                    src={collection.creatorImage}
                    alt={collection.creator}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-base">
                      {collection.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Created by{" "}
                      <span className="font-medium text-gray-700">
                        {collection.creator}
                      </span>
                      {collection.isVerified && (
                        <span className="ml-1 text-blue-500">
                          {/* <Check /> */}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-[178px] object-cover rounded-md mb-4"
                />
                <div className="flex justify-center bg-white">
                  <span className="bg-gray-100 inline relative bottom-[68px]  border-4 border-white text-gray-700 px-3 py-1 rounded-t-md text-sm">
                    Items {collection.items}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
