import React, { useEffect, useState } from "react";

const BasicInformation = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/information")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  // console.log(info);
  return (
    <div className="my-5 grid grid-cols-4 gap-5">
      <div className="bg-gradient-to-tr bg-teal-500 to-green-300 p-5 text-white text-center rounded shadow">
        <h5>প্রতিষ্ঠিত</h5>
        <h5 className="text-2xl">{info.founded}</h5>
      </div>
      <div className="bg-gradient-to-tr bg-teal-500 to-green-300 p-5 text-white text-center rounded shadow">
        <h5>নিয়িমিত ছাত্র</h5>
        <h5 className="text-2xl">{info.regularStudent}</h5>
      </div>
      <div className="bg-gradient-to-tr bg-teal-500 to-green-300 p-5 text-white text-center rounded shadow">
        <h5>শিক্ষক</h5>
        <h5 className="text-2xl">{info.teacher}</h5>
      </div>
      <div className="bg-gradient-to-tr bg-teal-500 to-green-300 p-5 text-white text-center rounded shadow">
        <h5>টোটাল জিপিএ ৫ </h5>
        <h5 className="text-2xl">{info.totat_gpa_five}</h5>
      </div>
    </div>
  );
};

export default BasicInformation;
