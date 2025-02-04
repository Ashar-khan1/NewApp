import React from "react";
import CollectionCard from "../CollectionCard";
import {Link} from 'react-router-dom'

const collections = [
  {
    images: [
      "src/assets/ds.jfif",
      "src/assets/ds1.jfif",
      "src/assets/ds2.jfif",
      "src/assets/ds3.jfif",
      "src/assets/ds4.jfif",
    ],
    title: "Wonderful Artwork",
    creator: "Jacob Jones",
  },
  {
    images: [
     "src/assets/ds.jfif",
      "src/assets/ds1.jfif",
      "src/assets/ds2.jfif",
      "src/assets/ds3.jfif",
      "src/assets/ds4.jfif",
    ],
    title: "Wonderful Artwork",
    creator: "Jacob Jones",
  },
  {
    images: [
      "src/assets/ds.jfif",
      "src/assets/ds1.jfif",
      "src/assets/ds2.jfif",
      "src/assets/ds3.jfif",
      "src/assets/ds4.jfif",
    ],
    title: "Wonderful Artwork",
    creator: "Jacob Jones",
  },
];

const TopCollections = () => {
  return (
    <section className="p-8 flex flex-col justify-center mx-auto max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        
        <h2 className="text-3xl md:text-[50px] lg:text-[64px] font-bold">Top Collections</h2>
       
      <Link to='/collection1'>
      <a href="#" className="text-red-500 text-sm hover:underline">
          View More Collection
        </a>
      
      </Link> 
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((collection, index) => (
          <CollectionCard
            key={index}
            images={collection.images}
            title={collection.title}
            creator={collection.creator}
          />
        ))}
      </div>
    </section>
  );
};

export default TopCollections;
