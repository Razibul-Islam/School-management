import React from "react";
import FoundationIcon from "@mui/icons-material/Foundation";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PeopleIcon from "@mui/icons-material/People";
import ApartmentIcon from "@mui/icons-material/Apartment";

const BasicInformation = () => {
  return (
    <div className="max-w-5xl my-20 mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10">
      <div className="flex flex-col items-center justify-center">
        <p className="p-5 bg-teal-300 rounded-full h-16 w-16">
          <FoundationIcon className="scale-150 mb-5" />
        </p>
        <p className="text-center text-2xl">
          ২০০০ <br />
          প্রতিষ্ঠিত
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="p-5 bg-teal-300 rounded-full h-16 w-16">
          <PeopleAltIcon className="scale-150 mb-5" />
        </p>
        <p className="text-center text-2xl">
          ৫০০ <br />
          সদস্য
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="p-5 bg-teal-300 rounded-full h-16 w-16">
          <PeopleIcon className="scale-150 mb-5" />
        </p>
        <p className="text-center text-2xl">
          ৯০০ <br />
          নিয়মিত ছাত্র
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="p-5 bg-teal-300 rounded-full h-16 w-16">
          <ApartmentIcon className="scale-150 mb-5" />
        </p>
        <p className="text-center text-2xl">
          ৩০০ <br />
          অনুমোদিত কলেজ
        </p>
      </div>
    </div>
  );
};

export default BasicInformation;
