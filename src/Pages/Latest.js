import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Latest = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  console.log(data);
  useEffect(() => {
    fetch(
      `https://school-server-liard.vercel.app/get-news-single-view?_id=${id}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto my-10 px-5 lg:px-0">
      <h1 className="text-xl font-semibold flex justify-between items-center">
        <span className="">{data.title}</span>
        <span className="font-normal text-base">
          {data.time ? new Date(data.time).toLocaleString() : <div></div>}
          <button className="font-bold ml-5">শেয়ার করুন</button>
        </span>
      </h1>

      <img src={`https://${data.imgUrl}`} alt="" className="w-full h-96 my-5" />
      <p className="mt-5 text-justify">{data.descripetion}</p>
    </div>
  );
};

export default Latest;
