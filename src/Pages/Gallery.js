import React from "react";
import image1 from "../assets/news1.jpeg";
import image2 from "../assets/image1.jpg";

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-xl mt-10 mb-5">গ্যালারি সমূহ</h1>
      <div className="mb-10 grid grid-cols-3 gap-10">
        <img src={image1} alt="" className="w-96 h-96 object-cover" />
        <img src={image2} alt="" className="w-96 h-96 object-cover" />
        <img src={image1} alt="" className="w-96 h-96 object-cover" />
        <img src={image2} alt="" className="w-96 h-96 object-cover" />
        <img src={image1} alt="" className="w-96 h-96 object-cover" />
        <img src={image2} alt="" className="w-96 h-96 object-cover" />
        <img src={image1} alt="" className="w-96 h-96 object-cover" />
        <img src={image2} alt="" className="w-96 h-96 object-cover" />
        <img src={image1} alt="" className="w-96 h-96 object-cover" />
      </div>
    </div>
  );
};

export default Gallery;
