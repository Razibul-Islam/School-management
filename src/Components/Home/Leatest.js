import React, { useEffect, useState } from "react";
// import newsImage from "../../assets/news1.jpeg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const Leatest = () => {
  const [newses, setNewses] = useState([]);
  useEffect(() => {
    const url = "https://school-server-umber.vercel.app/get-news";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewses(data));
  }, []);
  return (
    <div className="my-40">
      <h1 className="text-center text-xl text-teal-700">সর্বশেষ খবর</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 gap-10">
        {newses?.slice(0, 4).map((news, i) => (
          <div key={i} className="shadow-md bg-slate-100">
            <div>
              <img
                src={news?.imgUrl}
                alt=""
                className="w-full mb-3 h-52 object-cover"
              />
            </div>
            <div className="p-3">
              <span className="text-black/70 mb-3 block">
                <CalendarMonthIcon className="text-teal-600" />{" "}
                {new Date(news?.time).toLocaleString()}
              </span>
              <p className="font-semibold mb-1 text-teal-500">
                {news?.title?.length <= 40
                  ? news?.title
                  : `${news?.title?.slice(0, 40)}...`}
              </p>
              <p className="">
                {news?.description?.length <= 50
                  ? news?.description
                  : `${news?.description?.slice(0, 50)}...`}
              </p>
              <div className="flex justify-end">
                <Link
                  to={`/latest/${news?._id}`}
                  className="px-5 py-1 rounded-3xl border border-teal-500 flex items-center gap-5"
                >
                  <AddIcon />
                  আরো পড়ুন
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leatest;
