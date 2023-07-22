import React from "react";
import newsImage from "../../assets/news1.jpeg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";

const Leatest = () => {
  return (
    <div className="my-20">
      <h1 className="text-center text-xl ">সর্বশেষ খবর</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-10">
        <div className="shadow-lg">
          <div>
            <img src={newsImage} alt="" className="w-full mb-3" />
            <span className="text-black/70 my-3 block">
              <CalendarMonthIcon className="text-teal-600" /> 10 jul, 2023
            </span>
          </div>
          <div className="p-3">
            <p className="text-lg">
              আয়রে ভোলা খেয়াল-খোলা , স্বপনদোলা নাচিয়ে আয় , আয়রে পাগল আবোল
              তাবোল
            </p>
            <div className="flex justify-end">
              <button className="px-5 py-1 rounded-3xl border border-teal-500 flex items-center gap-5">
                <AddIcon />
                আরো পড়ুন
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-lg">
          <div>
            <img src={newsImage} alt="" className="w-full mb-3" />
            <span className="text-black/70 my-3 block">
              <CalendarMonthIcon className="text-teal-600" /> 10 jul, 2023
            </span>
          </div>
          <div className="p-3">
            <p className="text-lg">
              আয়রে ভোলা খেয়াল-খোলা , স্বপনদোলা নাচিয়ে আয় , আয়রে পাগল আবোল
              তাবোল
            </p>
            <div className="flex justify-end">
              <button className="px-5 py-1 rounded-3xl border border-teal-500 flex items-center gap-5">
                <AddIcon />
                আরো পড়ুন
              </button>
            </div>
          </div>
        </div>
        <div className="shadow-lg">
          <div>
            <img src={newsImage} alt="" className="w-full mb-3" />
            <span className="text-black/70 my-3 block">
              <CalendarMonthIcon className="text-teal-600" /> 10 jul, 2023
            </span>
          </div>
          <div className="p-3">
            <p className="text-lg">
              আয়রে ভোলা খেয়াল-খোলা , স্বপনদোলা নাচিয়ে আয় , আয়রে পাগল আবোল
              তাবোল
            </p>
            <div className="flex justify-end">
              <button className="px-5 py-1 rounded-3xl border border-teal-500 flex items-center gap-5">
                <AddIcon />
                আরো পড়ুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leatest;
