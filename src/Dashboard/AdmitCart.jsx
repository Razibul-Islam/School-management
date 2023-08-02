import React, { useRef } from "react";
import PrintIcon from "@mui/icons-material/Print";
import { useReactToPrint } from "react-to-print";

const AdmitCart = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <div
        ref={componentRef}
        className="max-w-3xl mx-auto mt-20 border border-black border-dashed p-4 rounded print-content"
      >
        <h1 className="text-xl text-center">
          কে.এইচ উচ্চ বিদ্যালয় & মহাবিদ্যালয়
        </h1>
        <p className="text-xl text-center">বীরগঞ্জ, দিনাজপুর</p>
        <h1 className="text-center text-3xl mt-5 underline underline-offset-8">
          প্রবেশ পত্র
        </h1>
        <form>
          <div className="flex justify-center items-center mt-2">
            <label htmlFor="name" className="w-[40px]">
              নাম :
            </label>
            <input
              type="text"
              id="name"
              className="outline-none border-b-2 border-black border-dashed w-full"
            />
          </div>
          <div className="mt-5 flex">
            <div className="w-full flex justify-center items-center ">
              <label htmlFor="class" className="w-[55px]">
                শ্রেণী :
              </label>
              <input
                type="text"
                id="name"
                className="outline-none border-b-2 border-black border-dashed w-full"
              />
            </div>
            <div className="w-full flex justify-center items-center ">
              <label htmlFor="class" className="w-[55px]">
                শাখা :
              </label>
              <input
                type="text"
                id="name"
                className="outline-none border-b-2 border-black border-dashed w-full"
              />
            </div>
          </div>
          <div className="mt-5 flex">
            <div className="w-full flex justify-center items-center ">
              <label htmlFor="class" className="w-[70px]">
                রোল নং :
              </label>
              <input
                type="text"
                id="name"
                className="outline-none border-b-2 border-black border-dashed w-full"
              />
            </div>
            <div className="w-full flex justify-center items-center ">
              <label htmlFor="class" className="w-[155px]">
                পরীক্ষা কক্ষ নং :
              </label>
              <input
                type="text"
                id="name"
                className="outline-none border-b-2 border-black border-dashed w-full"
              />
            </div>
          </div>
          <div className="w-full mt-20 flex justify-end">
            <p className="text-end border-t-2 border-black inline-block">
              পরীক্ষা নিয়ন্ত্রকের স্বাক্ষর
            </p>
          </div>
        </form>
      </div>
      <div className="max-w-3xl mx-auto flex items-center justify-end mt-10">
        <button
          onClick={() => handlePrint()}
          className="p-2 rounded bg-teal-300"
        >
          <PrintIcon /> প্রিন্ট
        </button>
      </div>
    </div>
  );
};

export default AdmitCart;
