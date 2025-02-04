import React from "react";

const Card = () => {
  const items = [
    {
      id: 1,
      image: "./CNC1.jfif",
      name: "DRAGON WORLD",
      Describe:
        "  Amollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim  sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue.",
      logo: "./Copy.png",
    },
    {
      id: 2,
      image: "./CNC2.png",
      name: "DRAGON WORLD",
      Describe:
        "  Amollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim  sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue.",
      logo: "./Copy.png",
    },
    {
      id: 3,
      image: "./CNC3.png",
      name: "DRAGON WORLD",
      Describe:
        "  Amollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim  sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue.",
      logo: "./Copy.png",
    },
    {
      id: 4,
      image: "./CNC4.png",
      name: "DRAGON WORLD",
      Describe:
        "  Amollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim  sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue.",
      logo: "./Copy.png",
    },
    {
      id: 5,
      image:  "./CNC2.png" ,
      name: "DRAGON WORLD",
      Describe:
        "  Amollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim  sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue.",
      logo: "./Copy.png",
    },
    {
      id: 6,
      image: "./CNC1.jfif",
      name: "DRAGON WORLD",
      Describe:
        "  Amollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim  sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue.",
      logo: "./Copy.png",
    },
    {
      id: 7,
      image: "./CNC4.png",
      name: "DRAGON WORLD",
      Describe:
        "  Amollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim  sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue.",
      logo: "./Copy.png",
    },
    {
      id: 8,
      image: "./CNC3.png",
      name: "DRAGON WORLD",
      Describe:
        "  Amollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim  sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue.",
      logo: "./Copy.png",
    },
  ];
  return (
    <div className="">
      {/* Title and Card */}
      <div className="">
        <h1 className=" font-bold text-2xl md:text-5xl lg:text-[64px] uppercase ms-3">Prompt examples</h1><br />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 align-middle ">
            {items.map((item) =>(
                <div key={item.id}
                className="bg-white shadow-md rounded-lg p-4 w-[577px] h-[262px] lg:w-[490px] xl:w-[577px] flex ">
                    <div className="relative">
                        <img src={item.image} alt= "Card image" className=" w-[310px] h-[232px] rounded-lg"/>
                    </div>
                    <div>
                        <h2 className="text-2xl ms-5 font-serif">{item.name}</h2>
                        <p className="text-sm w-[178px] text-left ms-9 text-gray-400 font-serif ">{item.Describe}</p>
                        <img src={item.logo} alt="Copy" className=" relative right-8 bottom-[40%]" />

                    </div>
                    <div className="absolute top-[100%]">
                        <a >

                        </a>
                    </div>
                    

                
                    
                </div>

            ))

            }
        </div>
      </div>
    </div>
  );
};

export default Card;
