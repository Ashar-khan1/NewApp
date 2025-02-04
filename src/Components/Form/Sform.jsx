import React, { useState } from "react";
import { Link } from "react-router";
import fimg from "/public/formimg.png";
import { X, Plus, DoorClosed } from "lucide-react";
import Navbar from "../CreateNFT/Navbar2";
// import Navbar from "../Home/Navbar";

const CollectionForm = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [isOn, setIsOn] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const collections = [
    {
      id: 1,
      name: "Wonderful Artwork",
      items: "1.5k",
      image: "./i.png",
    },
  ];

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      {/* <Navbar /> */}
      <Navbar/>

      <div className="mt-36 ms-2 h-[1440px]">
        <div className="w-[420px] flex justify-between ms-9 ">
            <Link to='/single'>
          <button className="flex w-[126px] h-[51px] bg-white ps-8 pt-4 rounded-2xl shadow-xl mb-1">
            {" "}
            <DoorClosed />
            Back
          </button>
            </Link>

          <p className="flex w-[126px] h-[51px] ps-6 pt-[14px] rounded-2xl border-gray-500 bg-white">
            Single NFT
          </p>
        </div>
        <div className="flex gap-4 mx-4">
          <div className="w-72 h-[309px] border-2 bg-white rounded-2xl">
            <img
              src={fimg}
              alt=""
              className="mx-auto mt-5 w-[256px] h-[269px]"
            />
          </div>
          <div className="w-[994px] h-[1320px] bg-white rounded-2xl">
            <h1 className="text-center uppercase font-bold text-[40px] mt-3">
              Mint your nft
            </h1>
            <div className="w-[817px] h-[96px] mx-auto my-6">
              <h3 className="font-bold">Item Name*</h3>
              <input
                type="text"
                placeholder="Name your NFT"
                className="w-[817px] h-[58px] border-2 ps-3 rounded-xl"
              />
            </div>
            <div className="w-[817px] h-[96px] mx-auto my-6">
              <h3 className="font-bold">Token Symbol*</h3>
              <input
                type="text"
                placeholder="$ CGPT, for example"
                className="w-[817px] h-[58px] border-2 ps-3 rounded-xl"
              />
            </div>

            {/* Description Section */}
            <div id="new" className="w-[817px] h-[96px] mx-auto my-6">
              <h3 className="font-bold">Description</h3>
              <p>
                The description will be included on the item's detail page
                underneath its image.
              </p>
              <input
                type="text"
                placeholder="Provide a detailed description of your item"
                className="w-[817px] h-[158px] pb-28 border-2 ps-3 rounded-xl"
              />
            </div>
            <div className="mt-24">
              <div className="max-w-3xl mx-auto p-6 bg-white  rounded-lg">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">Choose Collection</h2>
                  <div className="mt-4 text-right">
                  <Link to='/choose'>
                  
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black underline text-sm"
                    >
                      Choose From Existed
                    </a>
                  </Link>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  (This is the collection where your item will appear)
                </p>
                <div className="flex gap-4">
                  {/* Create New Collection */}
                  <button
                    onClick={() => setSelectedCollection("new")}
                    className={`flex-1 border rounded-lg p-4 flex items-center justify-start gap-4 ${
                      selectedCollection === "new"
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                  >
                    <div className="w-[61px] h-[61px] bg-gray-200 flex items-center justify-center rounded-md">
                      <span className="text-xl">+</span>
                    </div>
                    <div>
                      <p className="font-medium">Create new collection</p>
                      <p className="text-sm text-gray-500">Type to create</p>
                    </div>
                  </button>

                  {/* Existing Collection */}
                  {collections.map((collection) => (
                    <button
                      key={collection.id}
                      onClick={() => setSelectedCollection(collection.id)}
                      className={`flex-1 border rounded-lg p-4 flex items-center gap-4 ${
                        selectedCollection === collection.id
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                    >
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-[61px] h-[61px] rounded-md object-cover"
                      />
                      <div>
                        <p className="font-medium">{collection.name}</p>
                        <p className="text-sm text-gray-500">
                          Items{" "}
                          <span className="font-semibold">
                            {collection.items}
                          </span>
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[817px] h-[256px]  mx-auto">
              <h3 className="font-bold text-[20px]">Add Traits</h3>
              <p className="font-extralight text-[18px]">
                Traits describe attributes of your item. They appear as filters
                inside your collection page and are also listed out inside your
                item page.
              </p>
              <div className="bg-slate-200 w-[817px] h-[58px] mx-auto rounded-xl my-2">
                <div className="px-8 py-4 flex justify-between">
                  <p className="text-2xl">blue : fox</p>
                  <div className="flex justify-end gap-6 ">
                    <img src="./edit.png" alt="" className="w-6 h-6" />
                    <div className="w-[2px] h-[34px] bg-gray-300"></div>
                    <X />
                  </div>
                </div>
              </div>
              <button
                onClick={openPopup}
                className="flex gap-2 w-[195px] h-14 justify-center rounded-lg border-2 py-3 bg-rgba(231 231 231 1)  mt-10"
              >
                <span className="text-gray-500 text-[18px]">Add traits</span>
                <Plus />
              </button>

              {/* Popup for Adding Traits */}
              {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center  items-center mt-[104px]">
                  <div className="bg-white p-6 rounded-lg shadow-lg ">
                    <div className="flex justify-end">
                      <button type="button" onClick={closePopup} className="">
                        <X />
                      </button>
                    </div>
                    <h2 className="text-xl text-center font-bold mb-4">
                      Add Traits
                    </h2>
                    <form className="flex gap-3">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Type
                        </label>
                        <input
                          type="text"
                          placeholder="Ex.Size"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Ex.Large"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </form>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-red-600 text-white px-4 py-2 rounded"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="w-[89px] h-[68px] mt-6 ">
                <h3 className="mb-4 font-bold">Royalties</h3>
                <div
                  onClick={() => setIsOn(!isOn)}
                  className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition ${
                    isOn ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition ${
                      isOn ? "translate-x-7" : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </div>
              <div className="flex justify-end mt-16">
                <button className="w-[143px] h-[53px] bg-red-600 text-white rounded-md">
                  Mint NFT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionForm;
