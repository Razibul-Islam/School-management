import React, { useEffect, useState } from "react";
// import newsImage from "../../assets/news1.jpeg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const Leatest = () => {
  const [newses, setNewses] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/get-news";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewses(data));
  }, []);
  // console.log(newses);
  return (
    <div className="my-20">
      <h1 className="text-center text-xl ">সর্বশেষ খবর</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-10">
        {newses.slice(0, 3).map((news, i) => (
          <div key={i} className="shadow-lg">
            <div>
              <img
                src={`https://${news.imgUrl}`}
                alt=""
                className="w-full mb-3"
              />
              <span className="text-black/70 my-3 block">
                <CalendarMonthIcon className="text-teal-600" />{" "}
                {new Date(news.time).toLocaleString()}
              </span>
            </div>
            <div className="p-3">
              <p className="text-lg font-semibold mb-3">{news.title}</p>
              <p className="text-lg">
                {news.descripetion.length <= 50
                  ? news.descripetion
                  : `${news.descripetion.slice(0, 50)}...`}
              </p>
              <div className="flex justify-end">
                <Link
                  to={`/latest/${news._id}`}
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
