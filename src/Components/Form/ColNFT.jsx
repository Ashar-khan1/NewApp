import React from "react";
import Cform from "/public/formimg.png";
import { DoorClosed } from "lucide-react";
import { Link } from "react-router";
function ColNFT() {
  return (
    <div className="mt-36 ">
      <div className="flex  justify-around">
        <div className="">
         
         <Link to='/cnft'>
         <button className="flex gap-2 w-[126px] h-[53px] rounded-[20px] justify-center py-3 shadow-2xl bg-white">
            <DoorClosed /> Back
          </button>
         </Link>
          <img
            src={Cform}
            alt=""
            className="my-6 border-[5px] border-white rounded-2xl"
          />
          <button className="w-[131px] h-[50px] bg-white rounded-2xl shadow">
            Choose File{" "}
          </button>
        </div>
        <div>
          <button className="flex gap-2 w-[126px] h-[53px]  rounded-[20px] justify-center py-3 shadow-2xl bg-white">
            Collection
          </button>
          <div className="w-[995px] h-[751px] bg-white my-6 rounded-2xl">
            <h1 className="text-center font-bold  text-[40px] uppercase py-8">
              Create a Collection
            </h1>
            <div className="w-[817px] h-[96px] mx-auto my-6#">
              <h3 className="font-bold mb-1">Collection Name*</h3>
              <input
                type="text"
                placeholder="Name your Collection"
                className="w-[817px] h-[58px] border-2 ps-3 rounded-xl"
              />
            </div>
            <div className="w-[817px] h-[96px] mx-auto my-6">
              <h3 className="font-bold mb-1">Token Symbol*</h3>
              <input
                type="text"
                placeholder="$ CGPT, for example"
                className="w-[817px] h-[58px] border-2 ps-3 rounded-xl"
              />
            </div>
            <div className="w-[817px] h-[196px] mx-auto my-6">
              <h3 className="font-bold mb-1">Description</h3>
              <p>The description will be included on the item's detail page underneath its image.</p>
              <input
                type="text"
                placeholder="Provide a detailed description of your item"
                className="w-[817px] h-[158px] pb-28 border-2 ps-3 rounded-xl"
              />
            </div>
            <div className=" flex justify-end my-24 mr-8">

            <button className="bg-red-600 text-white px-4 py-2 rounded">Continue</button>
            </div>
          
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ColNFT;
