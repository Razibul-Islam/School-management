import React from "react";

const Result = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-center text-xl mb-5">একাডেমিক পরীক্ষার ফলাফল</h1>
      <div className="bg-slate-100 py-5">
        <form className="max-w-lg mx-auto space-y-5">
          <div className="flex items-center justify-between">
            <label htmlFor="year" className="w-36 inline-block">
              পরীক্ষার বছর :{" "}
            </label>
            <input
              type="number"
              name="year"
              id="year"
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="class" className="w-36 inline-block">
              শ্রেণী :{" "}
            </label>
            <select
              id="class"
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
            >
              <option value="select">--select-- </option>
              <option value="six">ষষ্ঠ শ্রেণী </option>
              <option value="seven">সপ্তম শ্রেণী </option>
              <option value="eight">অষ্টম শ্রেণী </option>
              <option value="nine">নবম শ্রেণী </option>
              <option value="ten">দশম শ্রেণী </option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="examName" className="w-36 inline-block">
              পরীক্ষার নাম :{" "}
            </label>
            <select
              id="examName"
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
            >
              <option value="select">--select-- </option>
              <option value="First evaluation test">
                (First evaluation test)১ম মূল্যায়ন পরীক্ষা
              </option>
              <option value="mid term">(mid term) মিড টার্ম </option>
              <option value="Second evaluation test">
                (Second evaluation test)২য় মূল্যায়ন পরীক্ষা
              </option>
              <option value="Final exam">(Final exam)বার্ষিক পরিক্ষা</option>
              <option value="uncountable">(uncountable)অগণিত</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="ID" className="w-36 inline-block">
              আইডি নাম্বার :{" "}
            </label>
            <input
              type="number"
              name=""
              id="ID"
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="roll" className="w-36 inline-block">
              ক্লাস রোল :{" "}
            </label>
            <input
              type="number"
              name=""
              id="roll"
              className="w-full inline-block border border-teal-300 outline-none px-2 py-1"
            />
          </div>
          <div className="space-x-5">
            <button className="mainBtn">View Result</button>
            <button className="mainBtn">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Result;
