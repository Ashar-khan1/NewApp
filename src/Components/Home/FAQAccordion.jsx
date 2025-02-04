// import React, { useState } from "react";

// const faqData = [
//   {
//     question: "What is an NFT?",
//     answer:
//       "An NFT (Non-Fungible Token) is a unique digital asset that represents ownership or proof of authenticity of a specific item or piece of content, often associated with digital art, collectibles, or virtual goods, and is stored on a blockchain.",
//   },
//   {
//     question: "How do I buy an NFT?",
//     answer:
//       "To buy an NFT, you'll need a cryptocurrency wallet and enough funds to cover the price of the NFT. Browse a marketplace, select the NFT, and complete the transaction.",
//   },
//   {
//     question: "How do I sell an NFT?",
//     answer:
//       "To sell an NFT, list it on a marketplace, set the price, and complete the sale when a buyer purchases it. Make sure your NFT is in your connected wallet.",
//   },
//   {
//     question: "What cryptocurrencies do you accept?",
//     answer:
//       "We accept major cryptocurrencies such as Ethereum, Bitcoin, and others depending on the marketplace's supported tokens.",
//   },
// ];

// const FAQAccordion = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <>
//       <h2 className="text-3xl font-bold text-center mb-8 mt-1 lg:text-[64px] w-full flex flex-col justify-center mx-auto max-w-6xl">
//         Frequently Asked Questions
//       </h2>
//     <section className="p-8 py-10 mx-auto ">
//       <div className="space-y-5">
//         {faqData.map((item, index) => (
//           <div
//             key={index}
//             className={`border rounded-lg h- ${
//               activeIndex === index ? "bg-red-100" : "bg-white"
//             }`}
//           >
//             <button
//               onClick={() => toggleAccordion(index)}
//               className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 focus:outline-none"
//             >
//               <span className="text-xl">{item.question}</span>
//               <span className="text-xl text-right" >
//                 {activeIndex === index ? "−" : "+"}
//               </span>
//             </button>
//             {activeIndex === index && (
//               <div className="p-4 text-gray-600">
//                 <p className="text-md">{item.answer}</p>
//               </div>
//             )}
//           </div>

//         ))}
//       </div>
//     </section>
//     </>
//   );
// };

// export default FAQAccordion;


import React, { useState } from "react";

const faqData = [
  {
    question: "What is an NFT?",
    answer:
      "An NFT (Non-Fungible Token) is a unique digital asset that represents ownership or proof of authenticity of a specific item or piece of content, often associated with digital art, collectibles, or virtual goods, and is stored on a blockchain.",
  },
  {
    question: "How do I buy an NFT?",
    answer:
      "To buy an NFT, you'll need a cryptocurrency wallet and enough funds to cover the price of the NFT. Browse a marketplace, select the NFT, and complete the transaction.",
  },
  {
    question: "How do I sell an NFT?",
    answer:
      "To sell an NFT, list it on a marketplace, set the price, and complete the sale when a buyer purchases it. Make sure your NFT is in your connected wallet.",
  },
  {
    question: "What cryptocurrencies do you accept?",
    answer:
      "We accept major cryptocurrencies such as Ethereum, Bitcoin, and others depending on the marketplace's supported tokens.",
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      {/* Accordion Section */}
      <section className="space-y-5">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border rounded-lg transition-all ${
              activeIndex === index ? "bg-red-100 shadow-md" : "bg-white"
            }`}
          >
            {/* Button (Question) */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 focus:outline-none"
            >
              <span className="text-xl">{item.question}</span>
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            {activeIndex === index && (
              <div className="p-4 text-gray-600 transition-opacity duration-300 ease-in-out">
                <p className="text-md">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQAccordion;
