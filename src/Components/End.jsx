import React from 'react';
import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <div className="min-h-screen bg-red-500">
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready For Next NFT Drop?
          </h1>
          
          {/* Email Input Section */}
          <div className="max-w-md mx-auto relative">
            <input
              type="email"
              placeholder="info@gmail.com"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2  p-2 rounded-lg">
              <Send className="h-5 w-5 text-white " />
            </button>
          </div>
        </div>

        {/* Logo and Navigation Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-16 space-y-8 md:space-y-0">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="bg-white p-2 rounded-lg">
              <img 
                src="/api/placeholder/40/40"
                alt="Fry Networks Logo"
                className="h-10 w-10"
              />
            </div>
            <span className="text-white text-xl font-bold">Fry Networks</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 ">
            {['About NFT', 'Live Auctions', 'Collection', 'Activity'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Description Text */}
        <div className="mt-8 max-w-lg">
          <p className="text-white text-lg">
            NFT ALGO is the world's leading NFTs marketplace where you can discover, sell and bid NFTs and get rich
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-8">
          {['facebook', 'discord', 'linkedin', 'youtube', 'instagram', 'tiktok', 'twitter', 'pinterest'].map((platform) => (
            <a
              key={platform}
              href="#"
              className="text-white hover:text-gray-200 transition-colors"
            >
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="sr-only">{platform}</span>
                <div className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;