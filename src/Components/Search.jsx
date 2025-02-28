import React from "react";
import { MoveUpRight } from 'lucide-react';

function Search() {
  return (
    <div className="flex flex-col justify-center mx-auto max-w-6xl">
      {/* Email Section */}
      <div className="p-6">
        <div className="text-center my-10">
          <h2 className="text-3xl text-center font-bold mb-6 md:text-[50px] xl:text-[64px]">Ready for Next NFT Drop?</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0">
            <input
              type="email"
              placeholder="info@gmail.com"
              className="w-full lg:px-16 sm:w-1/2 border border-red-300 rounded-3xl px-6 py-2 xl:py-3 lg:h-[96px] focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button className="bg-red-500 absolute right-8 sm:right-0 text-white px-6 py-1 lg:h-[70px] lg:w-[70px] rounded-3xl sm:relative lg:right-5 sm:-ml-16 hover:bg-red-600">
               <MoveUpRight />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-red-500 text-white py-10 rounded-t-lg "
      > 
      <div
      style={{ backgroundImage: './Fimg.png', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Logo Section */}
            <div className="flex-1">
              <img
                src="src/assets/Logo white 2.png"
                alt="Logo"
                className="h-24 w-auto mx-auto lg:mx-0"
              />
              
            </div>

            {/* Social Links */}
            <div className="flex-1 flex justify-left gap-2 flex-wrap">
            <p className="text-sm sm:text-center lg:text-left mt-4 max-w-md mx-auto lg:mx-0">
                NFT ALGO is the world's leading NFTs marketplace where you can
                discover, sell, and bid NFTs and get rich.
              </p>
              {["vector", "link", "instagram", "discord", "Tiktok"].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-white w-10 h-10 rounded  flex items-center justify-center hover:opacity-80"
                >
                  <img
                    src={`src/assets/footer/${icon}.png`}
                    alt={icon}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>

            {/* About Links */}
            <div className="flex-1 text-left md:text-center lg:text-right">
              <h3 className="text-xl font-bold mb-4">About</h3>
              <ul className="space-y-2">
                {["About NFT", "Live Auctions", "Collection", "Activity"].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-gray-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Search;