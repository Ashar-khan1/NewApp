


import React, { useState } from "react";
import {Link} from 'react-router-dom'
import NFT from "./NFTFILE/NFT";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal

  const wallets = [
    { id: 1, name: "Pera", logo: "/pera-logo.png" },
    { id: 2, name: "Defly", logo: "/defly-logo.png" },
    { id: 3, name: "Daffi", logo: "/daffi-logo.png" },
    { id: 4, name: "WalletConnect", logo: "/walletconnect-logo.png" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="md:align-middle bg-gradient-to-r from-white to-pink-100 flex items-center justify-around py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <ul>
            <li>
              <a href="">
                <img
                  src="src/assets/logo.png"
                  alt="Fry Networks Logo"
                  className="w-8 h-8 mr-2"
                />
              </a>
            </li>
            <li>
              <span className="text-red-600 text-xs font-bold">
                Fry Networks
              </span>
            </li>
          </ul>
        </div>

        {/* Menu (for mobile) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-8 text-gray-700 md:items-center`}
        >
          <li className="font-semibold text-center text-red-500">Home</li>
          <Link to='/nft' >
          <li className="hover:text-red-500 cursor-pointer">
            AI NFT Generation
          </li>
          </Link>
        </ul>

        {/* Buttons */}
        <div
          className={`${
            isOpen ? "block mt-4" : "hidden"
          } md:flex md:space-x-4 items-center`}
        >
          {/* Connect Wallet Button */}
          <button
            className="w-full md:w-auto bg-red-600 border border-red-600 text-white  ms-2 px-4 py-0 sm:py-1 rounded hover:bg-red-50"
            onClick={() => setIsModalOpen(true)}
          >
            Connect Wallet
          </button>

          <button
            id="btn-2"
            className="w-full md:w-auto bg-white-200 text-red ms-2 sm:px-4 py-1 border-1 rounded hover:bg-red-700"
          >
            Create NFT
          </button>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-80 rounded-lg shadow-lg p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>

            {/* Modal Content */}
            <h2 className="text-center text-xl font-bold mb-4">
              Connect Your Wallet
            </h2>
            <div className="flex items-center justify-center ">
              <img src="src/assets/logo.png" alt="Fry Networks" className="h-10" />
             
            </div>
              <h3 className=" flex items-center justify-center mb-3 font-semibold text-red-500 ml-2">
                Fry Networks
              </h3>

            {/* Wallet Options */}
            <div className="space-y-3">
              {wallets.map((wallet) => (
                <button
                  key={wallet.id}
                  className="w-full flex items-center border border-red-500 rounded-md py-2 px-4 hover:bg-red-100"
                >
                  <img
                    src={wallet.logo}
                    alt={wallet.name}
                    className="h-6 w-6 mr-3"
                  />
                  {wallet.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
