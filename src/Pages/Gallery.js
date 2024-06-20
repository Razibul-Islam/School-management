import React, { useEffect, useState } from "react";
// import image1 from "../assets/news1.jpeg";
// import image2 from "../assets/image1.jpg";

const Gallery = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://school-server-umber.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-xl mt-10 mb-5">গ্যালারি সমূহ</h1>
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 lg:px-0 gap-10">
        {data.map((teacher, i) => (
          <div
            key={i}
            className="bg-slate-100 rounded-sm overflow-hidden relative"
          >
            <img
              className="h-40 w-full object-cover"
              src={teacher.teacherImg}
              alt=""
            />
            <div className="text-center my-4">
              <h4 className="my-2">{teacher.caption}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
