import React, { useEffect, useState } from "react";

const BasicInformation = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    fetch("https://school-server-umber.vercel.app/information")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div>
      <p className="text-xl mb-10 text-center ">
        কে.এইচ উচ্চ বিদ্যালয় & মহাবিদ্যালয়
      </p>
      <div className="my-5 grid grid-cols-1 px-5 lg:px-0 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-gradient-to-tr bg-teal-500 to-green-300 p-5 text-white text-center rounded shadow">
          <h5>প্রতিষ্ঠিত</h5>
          <h5 className="text-2xl">{info?.founded ? info?.founded : "0"}</h5>
        </div>
        <div className="bg-gradient-to-tr bg-teal-500 to-green-300 p-5 text-white text-center rounded shadow">
          <h5>নিয়িমিত ছাত্র</h5>
          <h5 className="text-2xl">
            {info?.regularStudent ? info?.regularStudent : "0"}
          </h5>
        </div>
        <div className="bg-gradient-to-tr bg-teal-500 to-green-300 p-5 text-white text-center rounded shadow">
          <h5>শিক্ষক</h5>
          <h5 className="text-2xl">{info?.teacher ? info?.teacher : "0"}</h5>
        </div>
        <div className="bg-gradient-to-tr bg-teal-500 to-green-300 p-5 text-white text-center rounded shadow">
          <h5>টোটাল জিপিএ ৫ </h5>
          <h5 className="text-2xl">
            {info?.totat_gpa_five ? info?.totat_gpa_five : "0"}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
