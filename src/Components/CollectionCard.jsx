import React from "react";

const CollectionCard = ({ images, title, creator }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
      <div className="grid grid-cols-2 gap-2 mb-4">
        {images.slice(0, 4).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Collection image ${index + 1}`}
            className="w-full h-20 object-cover rounded-lg"
          />
        ))}
      </div>
      <div className="flex gap-3">

      <div className="relative w-20 h-20">
              <img
                src="src/assets/sc1.png"
                // alt={seller.name}
                className="w-full h-full object-cover rounded-[20px] rounded-tr-[34px]"
                
              />
              
              <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold rounded-full p-1">
                ✓
              </span>
            </div>
            <div>

      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-500 text-sm">Created by {creator}</p>
            </div>
      </div>
    </div>
  );
};

export default CollectionCard;
