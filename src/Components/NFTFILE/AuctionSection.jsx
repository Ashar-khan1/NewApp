import React from "react";

const AuctionSection = () => {
  const items = [
    { id: 0, image: "./Auction/A1.png", alt: "Auction Item 1", size: "large" },
    { id: 1, image: "./Auction/A2.png", alt: "Auction Item 2", size: "medium1" },
    { id: 2, image: "./Auction/A3.png", alt: "Auction Item 3", size: "medium" },
    { id: 3, image: "./Auction/A4.jfif", alt: "Auction Item 4", size: "large2" },
  ];
  

  const getSizeClasses = (size) => {
    switch (size) {
      case "large":
        return "w-64 h-64"; // Large size for index 0 
      case "large2":
        return "w-64 h-64 md:w-64 md:h-40 lg:h-64"; // Large size for index 3
      case "medium1":
        return "w-64 h-40 lg:mt-24 mt- md:w-64 md:h-64 lg:h-40"; // Medium size for index 1 
      case "medium":
        return "w-64 h-40 lg:mt-24 mt-"; // Medium size for index 2
      default:
        return "w-48 h-48"; // Default size (medium)
    }
  };
  

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-5xl font- text-red-500 uppercase lg:text-[80px] xl:text-[150px] mt-14">Auction</h2>
      </div>
      <div className="flex justify-center gap-2 flex-wrap">
        {items.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition flex items-center justify-center overflow-hidden ${getSizeClasses(
              item.size
            )} `}
            >
            <img
              src={item.image}
              alt={item.alt}
              className="object-cover rounded w-full h-full p-1"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuctionSection;


