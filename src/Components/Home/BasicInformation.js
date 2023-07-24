import React, { useEffect, useState } from "react";
import FoundationIcon from "@mui/icons-material/Foundation";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PeopleIcon from "@mui/icons-material/People";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SchoolIcon from "@mui/icons-material/School";

const BasicInformation = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    fetch("https://school-server-liard.vercel.app/information")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  // console.log(info);
  return (
    <div className="max-w-5xl my-20 mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10">
      <div className="flex flex-col items-center justify-center">
        <p className="p-5 bg-teal-300 rounded-full h-16 w-16">
          <FoundationIcon className="scale-150 mb-5" />
        </p>
        <p className="text-center text-2xl">
          {info.founded} <br />
          প্রতিষ্ঠিত
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="p-5 bg-teal-300 rounded-full h-16 w-16">
          <PeopleAltIcon className="scale-150 mb-5" />
        </p>
        <p className="text-center text-2xl">
          {info.teacher} <br />
          শিক্ষক
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="p-5 bg-teal-300 rounded-full h-16 w-16">
          <PeopleIcon className="scale-150 mb-5" />
        </p>
        <p className="text-center text-2xl">
          {info.regularStudent} <br />
          নিয়মিত ছাত্র
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="p-5 bg-teal-300 rounded-full h-16 w-16">
          <SchoolIcon className="scale-150 mb-5" />
        </p>
        <p className="text-center text-2xl">
          {info.totat_gpa_five} <br />
          টোটাল জিপিএ ৫
        </p>
      </div>
    </div>
  );
};

export default BasicInformation;
