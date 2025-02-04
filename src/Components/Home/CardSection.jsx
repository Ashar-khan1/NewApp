import React from "react";

const cards = [
    
  // {
  //   id: 1,
  //   title: "STELLA NIVA",
  //   image: "src/assets/card4.png",  
  //   price: "12.8 ETH",
  // },
  // {
  //   id: 2,
  //   title: "STELLA AQUA",
  //   image: "src/assets/cad5.png",  
  //   price: "10.5 ETH",
  // },
  // {
  //   id: 3,
  //   title: "STELLA FLORA",
  //   image: "src/assets/cardimg.png",  
  //   price: "8.4 ETH",
  // },
  // {
  //   id: 4,
  //   title: "STELLA LUNA",
  //   image: "src/assets/card.png",  
  //   price: "14.2 ETH",
  // },
  // {
  //   id: 5,
  //   title: "STELLA NOVA",
  //   image: "src/assets/card3.png",  
  //   price: "15.0 ETH",
  // },
];

const CardSection = () => {
  return (
    <section className="bg-gradient-to-r from-white to-red-50 py-10 md:py-20"
    style={{
        backgroundImage: "url('src/assets/frame.png')",
        backgroundSize: "cover", 
        backgroundPosition: "center",
      }}>
        {/* slider image */}
        <img  className="mx-auto w-auto  " src="src/assets/f1.png" alt="" />
        {/*  */}
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform"
            >
              <img
                src={card.image}
                alt={card.title}
                className="rounded-t-lg w-full h-40 object-cover"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">Price: {card.price}</p>
                <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
