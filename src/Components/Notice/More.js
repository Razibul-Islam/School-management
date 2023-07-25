import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const More = ({ path }) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:5000/single-notice?_id=${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto my-10 px-5 lg:px-0">
      <h1 className="text-xl font-semibold flex justify-between items-center">
        <span>{data.title}</span>
        <span className="font-normal text-base">
          {data.time ? new Date(data.time).toLocaleString() : <div></div>}
        </span>
      </h1>
      <p className="mt-5 text-justify">{data.prahgraph}</p>
    </div>
  );
};

export default More;
