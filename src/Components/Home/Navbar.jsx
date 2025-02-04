// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal

//   const wallets = [
//     { id: 1, name: "Pera", logo: "/pera-logo.png" },
//     { id: 2, name: "Defly", logo: "/defly-logo.png" },
//     { id: 3, name: "Daffi", logo: "/daffi-logo.png" },
//     { id: 4, name: "WalletConnect", logo: "/walletconnect-logo.png" },
//   ];

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50  bg-white/0 backdrop-blur-md  flex items-center justify-around py-4 px-6">
//         {/* Logo */}
//         <div className="relative right-3">
//           <ul>
//               <Link to='/'>
//             <li>
//               <a href="">
//                 <img
//                   src="src/assets/logo.png"
//                   alt="Fry Networks Logo"
//                   className="w-16 h-12 mr-2"
//                 />
//               </a>
              
//             </li>
//             <li>
//               <span className="text-red-600 text-xs font-bold">
//                 Fry Networks
//               </span>
//             </li>
//             </Link>
//           </ul>
//         </div>

//         {/* Menu (for mobile) */}
//         <button
//           className="md:hidden text-gray-700 focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={
//                 isOpen
//                   ? "M6 18L18 6M6 6l12 12"
//                   : "M4 6h16M4 12h16M4 18h16"
//               }
//             ></path>
//           </svg>
//         </button>

//         {/* Navigation Links */}
//         <ul
//           className={`${
//             isOpen ? "block" : "hidden"
//           } md:flex space-x-8 text-gray-700 md:items-center`}
//         >
//           <Link to="/">
//             <li className="text-center font-bold hover:underline text-black hover:transition text-[18px] hover:text-red-500 cursor-pointer uppercase">
//               Home
//             </li>
//           </Link>
//           <Link to="/createnft1">
//             <li className="hover:text-red-500 hover:underline hover:transition text-black text-[18px]  font-bold cursor-pointer uppercase">
//               AI NFT Generation
//             </li>
//           </Link>
//         </ul>

//         {/* Buttons */}
//         <div
//           className={`${
//             isOpen ? "block mt-4" : "hidden"
//           } md:flex md:space-x-4 items-center`}
//         >
//           {/* Connect Wallet Button */}
//           <button
//             className="w-full md:w-auto bg-red-600 border border-red-600 text-white ms-2 px-4 py-0 sm:py-1 rounded "
//             onClick={() => setIsModalOpen(true)}
//           >
//             Connect Wallet
//           </button>
//           <Link to='/createnft1'>
//           <button
//             id="btn-2"
//             className="w-full md:w-auto bg-white-200 text-red ms-2 sm:px-4 py-1 border-1 rounded"
//           >
//             Create NFT
//           </button>
//           </Link>
//         </div>
//       </nav>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white w-80 rounded-lg shadow-lg p-6 relative">
//             {/* Close Button */}
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//               onClick={() => setIsModalOpen(false)}
//             >
//               &times;
//             </button>

//             {/* Modal Content */}
//             <h2 className="text-center text-xl font-bold mb-4">
//               Connect Your Wallet
//             </h2>
//             <div className="flex items-center justify-center ">
//               <img
//                 src="src/assets/logo.png"
//                 alt="Fry Networks"
//                 className="h-10"
//               />
//             </div>
//             <h3 className="flex items-center justify-center mb-3 font-semibold text-red-500 ml-2">
//               Fry Networks
//             </h3>

//             {/* Wallet Options */}
//             <div className="space-y-3">
//               {wallets.map((wallet) => (
//                 <button
//                   key={wallet.id}
//                   className="w-full flex items-center border border-red-500 rounded-md py-2 px-4 hover:bg-red-100"
//                 >
//                   <img
//                     src={wallet.logo}
//                     alt={wallet.name}
//                     className="h-6 w-6 mr-3"
//                   />
//                   {wallet.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const wallets = [
    { id: 1, name: "Pera", logo: "/pera-logo.png" },
    { id: 2, name: "Defly", logo: "/defly-logo.png" },
    { id: 3, name: "Daffi", logo: "/daffi-logo.png" },
    { id: 4, name: "WalletConnect", logo: "/walletconnect-logo.png" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/0 backdrop-blur-md flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <Link to="/">
            <div className=" items-center">
              <img
                src="src/assets/logo.png"
                alt="Fry Networks Logo"
                className="w-20 h-16 mr-2"
              />
              <span className="text-red-600 text-xs font-bold">Fry Networks</span>
            </div>
          </Link>
        </div>

        {/* Menu Button (for mobile) */}
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

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 md:items-center">
          <Link to="/">
            <li className="text-center font-bold hover:underline text-black hover:transition text-[18px] hover:text-red-500 cursor-pointer uppercase">
              Home
            </li>
          </Link>
          <Link to="/createnft1">
            <li className="hover:text-red-500 hover:underline hover:transition text-black text-[18px] font-bold cursor-pointer uppercase">
              AI NFT Generation
            </li>
          </Link>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex md:space-x-4 items-center">
          <button
            className="w-full md:w-auto bg-red-600 border border-red-600 text-white px-4 py-1 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Connect Wallet
          </button>
          <Link to="/createnft1">
            <button
              className="w-full md:w-auto bg-white border border-red-600 text-red-600 px-4 py-1 rounded"
            >
              Create NFT
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="p-4">
          {/* Close Button */}
          <button
            className="text-gray-700 focus:outline-none mb-4"
            onClick={() => setIsOpen(false)}
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Sidebar Content */}
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="flex items-center mb-6">
              <img
                src="src/assets/logo.png"
                alt="Fry Networks Logo"
                className="w-16 h-12 mr-2"
              />
              <span className="text-red-600 text-xs font-bold">Fry Networks</span>
            </div>

            {/* Navigation Links */}
            <ul className="space-y-4 text-center">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <li className="text-center font-bold hover:underline text-black hover:transition text-[18px] hover:text-red-500 cursor-pointer uppercase">
                  Home
                </li>
              </Link>
              <Link to="/createnft1" onClick={() => setIsOpen(false)}>
                <li className="hover:text-red-500 hover:underline hover:transition text-black text-[18px] font-bold cursor-pointer uppercase">
                  AI NFT Generation
                </li>
              </Link>
            </ul>

            {/* Buttons */}
            <div className="mt-6 w-full">
              <button
                className="w-full bg-red-600 border border-red-600 text-white px-4 py-2 rounded mb-4"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
              >
                Connect Wallet
              </button>
              <Link to="/createnft1" onClick={() => setIsOpen(false)}>
                <button
                  className="w-full bg-white border border-red-600 text-red-600 px-4 py-2 rounded"
                >
                  Create NFT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

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
            <div className="flex items-center justify-center">
              <img
                src="src/assets/logo.png"
                alt="Fry Networks"
                className="h-10"
              />
            </div>
            <h3 className="flex items-center justify-center mb-3 font-semibold text-red-500 ml-2">
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
