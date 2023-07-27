import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Notice = () => {
  const [notice, setNotice] = useState([]);
  useEffect(() => {
    const url = "https://school-server-liard.vercel.app/get-notice";
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
          <div key={i} className="p-3 bg-slate-100 my-2">
            <p className="my-2 text-teal-600">{singleNotice.title}</p>
            <p>{singleNotice.prahgraph}</p>
            <p className="flex justify-between items-center w-full mt-1 text-teal-500">
              <span>{new Date(singleNotice.time).toLocaleString()}</span>
              <Link
                to={`/more/${singleNotice._id}`}
                className="rounded-3xl bg-teal-300 px-3 py-2 bg-gradient-to-r from-teal-500 to-green-300 text-white font-bold text-right flex items-center"
              >
                আরো পড়ুন <ArrowForwardIcon />
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
