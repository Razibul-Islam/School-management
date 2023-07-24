import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Notice = () => {
  const [notice, setNotice] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/get-notice";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNotice(data));
  }, []);
  // console.log(notice);
  return (
    <div className="max-w-6xl mx-auto my-10 px-5 lg:px-0">
      <h1 className="text-center text-xl mb-10">সকল বিজ্ঞপ্তি</h1>
      <div className="md:mx-5 flex flex-col gap-5 w-full">
        {notice.map((singleNotice, i) => (
          <div
            key={i}
            className="border-2 border-blue-200 p-3 rounded flex flex-col justify-center"
          >
            <p className="font-semibold mb-3">{singleNotice.title}</p>
            <p>{singleNotice.prahgraph}</p>
            <p className="flex justify-between items-center w-full mt-1">
              <span>{new Date(singleNotice.time).toLocaleString()}</span>
              <Link
                to={`/more/${singleNotice._id}`}
                className="text-[#002147] font-bold text-right"
              >
                আরো পড়ুন
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
