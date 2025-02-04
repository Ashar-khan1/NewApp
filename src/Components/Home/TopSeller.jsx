// TopSeller.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Check } from 'lucide-react';

const TopSeller = () => {
  const sellers = [
    { id: 1, name: "Jacob Jones", image: "src/assets/TS1.png", price: "245.57 FTY" },
    { id: 2, name: "Jacob Jones", image: "src/assets/TS/TS2.png", price: "245.57 FTY" },
    { id: 3, name: "Jacob Jones", image: "src/assets/TS/TS3.png", price: "245.57 FTY" },
    { id: 4, name: "Jacob Jones", image: "src/assets/TS/TS4.png", price: "245.57 FTY" },
    { id: 5, name: "Jacob Jones", image: "src/assets/TS/TS8.png", price: "245.57 FTY" },
    { id: 6, name: "Jacob Jones", image: "src/assets/TS/TS5.png", price: "245.57 FTY" },
    { id: 7, name: "Jacob Jones", image: "src/assets/TS/TS6.png", price: "245.57 FTY" },
    { id: 8, name: "Jacob Jones", image: "src/assets/TS/TS7.png", price: "245.57 FTY" },
  ];

  return (
    <div className="flex flex-col justify-center mx-auto max-w-6xl py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl sm:text-4xl font-bold md:text-[64px] mb-8 xl:relative  ">TOP SELLER</h2>
        <Link to='/sellers'>
        
        <a href="/view-all" className="text-red-500 text-sm font-medium hover:underline">
          View All
        </a>
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4     gap-6">
        {sellers.map((seller) => (
          <div
            key={seller.id}
            className="flex flex-col items- rounded-lg p-4  "
          >
            <div className="flex gap-2">

            <div className="relative w-20 h-20 ">
              <img
                src={seller.image}
                alt={seller.name}
                className="w-full h-full object-cover rounded-[20px]  rounded-tr-[30px] "
                
              />
              
              <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold rounded-full">
              <Check size={20}/>
              </span>
            </div>
            <div className="">

            <h3 className="mt-4 text-xs font-semibold sm:text-sm">{seller.name}</h3>
            <p className="text-gray-600 text-xs sm:text-sm">{seller.price}</p>
          </div>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default TopSeller;
