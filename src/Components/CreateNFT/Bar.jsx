
// import React from "react";
// import { Link } from "react-router"

// const NFTCreation = () => {
//   return (


//     <div className="" >
//     <div className="flex justify-center"> 
//     <img src="./CN1.png" alt="" />

//     </div>
//     <div className="container mx-auto px-4 text-center relative bottom-">
//        <p className="uppercase text-gray-600 font-normal relative bottom-5">get onboard and earn money like a pro</p>
//       </div>
    
//     <div className=" h-64 flex items-center justify-center relative ">
//       <div className="w-full max-w-3xl  p- rounded-lg  space-y-6">
//         {/* Input Section */}
//         <div className="flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Fantasy Creature holding a sword..."
//             className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 h-[70px]"
//           />
//             <Link to='/single'>

//           <button className= "relative right-[134px] bg-red-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-red-600 transition h-[50px]">
//             Generate
//           </button>            </Link>

//         </div>

//         {/* Dropdowns and Options */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           <select
//             className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
//           >
//             {/* <option value="">Select NFT type</option>/ */}
            
//              <option value="single">Single NFT Image</option>
            
//             <option value="multi">Multi NFT Collection</option>
            
//           </select>
//           <div className="flex items-center border bg-white  border-gray-300 rounded-lg px-4 py-2">
//             <label htmlFor="supply" className="mr-2 bg-white">
//               Supply
//             </label>
//             <input
//               id="supply"
//               type="number"
//               min="1"
//               defaultValue="1"
//               className="w-16 focus:outline-none"
//             />
//           </div>
//           <button className="flex items-center justify-center bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-200 transition">
//             Add Styles
//             <span className="ml-2 text-lg font-bold">+</span>
//           </button>
//         </div>

//         {/* Divider */}
        

//         {/* Manual Create Button */}
        
//       </div>
//     </div>
    
//     </div>
//   );
// };

// export default NFTCreation;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NFTCreation = () => {
  const [selectedOption, setSelectedOption] = useState("single"); // Track selected option
  const navigate = useNavigate(); // Use navigate for routing

  const handleGenerate = () => {
    if (selectedOption === "single") {
      navigate("/single"); // Navigate to single NFT page
    } else {
      navigate("/cnft"); // Navigate to collection NFT page
    }
  };

  return (
    <div className="">
      <div className="flex justify-center">
        <img src="./CN1.png" alt="" />
      </div>
      <div className="container mx-auto px-4 text-center">
        <p className="uppercase text-gray-600 font-normal">
          Get onboard and earn money like a pro
        </p>
      </div>

      <div className="h-64 flex items-center justify-center">
        <div className="w-full max-w-3xl space-y-6">
          {/* Input Section */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Fantasy Creature holding a sword..."
              className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 h-[70px]"
            />
            <button
              onClick={handleGenerate}
              className="bg-red-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-red-600 transition h-[50px]"
            >
              Generate
            </button>
          </div>

          {/* Dropdowns and Options */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="single">Single NFT Image</option>
              <option value="multi">Multi NFT Collection</option>
            </select>
            <div className="flex items-center border bg-white border-gray-300 rounded-lg px-4 py-2">
              <label htmlFor="supply" className="mr-2 bg-white">
                Supply
              </label>
              <input
                id="supply"
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 focus:outline-none"
              />
            </div>
            <button className="flex items-center justify-center bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-200 transition">
              Add Styles
              <span className="ml-2 text-lg font-bold">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCreation;
