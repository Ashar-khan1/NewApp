import React from "react";
import { Link} from "react-router";

const CollectionTable = () => {
  const collections = [
    {
      id: 1,
      name: "Jacob Jones",
      avatar: "./Auction/A1.png",
      volume: "154.00",
      followers: 100,
      percentChange: "+237.67%",
      floorPrice: "4,901",
      items: "9.8k",
    },
    {
      id: 2,
      name: "Jacob Jones",
      avatar: "./Auction/A2.png",
      volume: "154.00",
      followers: 150,
      percentChange: "+237.67%",
      floorPrice: "4,901",
      items: "9.8k",
    },
    {
      id: 3,
      name: "Jacob Jones",
      avatar: "./Auction/A3.png",
      volume: "154.00",
      followers: 75,
      percentChange: "+237.67%",
      floorPrice: "4,901",
      items: "9.8k",
    },
    {
      id: 4,
      name: "Jacob Jones",
      avatar: "./Auction/A4.jfif",
      volume: "154.00",
      followers: 75,
      percentChange: "+237.67%",
      floorPrice: "4,901",
      items: "9.8k",
    },
    {
      id: 5,
      name: "Jacob Jones",
      avatar: "./Auction/A2.png",
      volume: "154.00",
      followers: 33,
      percentChange: "+237.67%",
      floorPrice: "4,901",
      items: "9.8k",
    },
  ];

  return (
    <div className="p-6 ">
      <div className="my-6"> {/* Added margin-top and margin-bottom */}
        <div className="overflow-x-auto shadow-md">
          <table className="min-w-full bg-white rounded-lg">
            {/* Table Header */}
            <thead>
             <tr className="bg-gray-100  text-sm leading-normal">
                <th className="py-3 px-6 text-left">Collections</th>
                <th className="py-3 px-6 text-center">Volume</th>
                <th className="py-3 px-6 text-center">Followers</th>
                <th className="py-3 px-6 text-center">24%</th>
                <th className="py-3 px-6 text-center">Floor Price</th>
                <th className="py-3 px-6 text-center">Items</th>
              </tr>
            </thead>
            {/* Table Body */}
          
            
            <tbody className="text-gray-700 text-sm font-light">
  {collections.map((collection, index) => (
    <tr
      key={collection.id}
      className="border-b border-gray-200 hover:bg-gray-50"
    >
      {/* Collection */}
      <td className="py-4 px-6 text-left flex items-center">
        <span className="text-black font-bold text-sm">{`0${index + 1}`}</span>
        <img
          src={collection.avatar}
          alt={collection.name}
          className="w-[74px] h-[74px] object-fill rounded-lg ml-4 p-1 shadow-md"
        />
       <span className="font-bold ml-4">{collection.name}</span>
      </td>

      {/* Volume */}
      <td className="py-4 px-6 text-center"><img src="./V1.png" alt=""  className="relative top-[15px]"/>{collection.volume}</td>

      {/* Followers */}
      <td className="py-4 px-6 text-center">{collection.followers}</td>

      {/* Percentage */}
      <td className="py-4 px-6 text-center text-green-500 font-semibold">
        {collection.percentChange}
      </td>

      {/* Floor Price */}
      <td className="py-4 px-6 text-center">{collection.floorPrice}</td>

      {/* Items */}
      <td className="py-4 px-6 text-center">{collection.items}</td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default CollectionTable;
