import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="my-40 flex flex-wrap lg:flex-nowrap justify-between items-end gap-10 px-5 lg:px-0">
      <div className="lg:w-2/3">
        <h1 className="text-xl mb-5 text-teal-700">আমাদের স্কুল এ স্বাগতম</h1>
        <p className="text-justify">
          জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে
          সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন নিয়ে আসে
          প্রকৃতির মালখানা থেকে। জীবরঙ্গভূমিতে মানুষ এসে দেখা দেয় দুই শূন্য
          হাতে মুঠো বেঁধে। মানুষ আসবার পূর্বেই জীবসৃষ্টিযজ্ঞে প্রকৃতির
          ভূরিব্যয়ের পালা শেষ হয়ে এসেছে। বিপুল মাংস, কঠিন বর্ম, প্রকাণ্ড লেজ
          নিয়ে জলে স্থলে পৃথুল দেহের যে অমিতাচার প্রবল হয়ে উঠেছিল তাতে
          ধরিত্রীকে দিলে ক্লান্ত করে। প্রমাণ হল আতিশয্যের পরাভব অনিবার্য।
          পরীক্ষায় এটাও স্থির হয়ে গেল যে, প্রশ্রয়ের পরিমাণ যত বেশি হয়
          দুর্বলতার বোঝাও তত দুর্বহ হয়ে ওঠে। নূতন পর্বে প্রকৃতি যথাসম্ভব
          মানুষের বরাদ্দ কম করে দিয়ে নিজে রইল নেপথ্যে। মানুষকে দেখতে হল খুব
          ছোটো, কিন্তু সেটা একটা কৌশল মাত্র। এবারকার জীবযাত্রার পালায় বিপুলতাকে
          করা হল বহুলতায় পরিণত। মহাকায় জন্তু ছিল প্রকাণ্ড একলা, মানুষ হল
          দূরপ্রসারিত অনেক।অংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান
          অংশাঙ্কিত ইউক্যালিপটাস অংশাবতার হালহদিশ পিতৃতর্পণ টকানো ঈক্ষিত জগজ্জন
          তকতনামা আঁকুবাঁকু পঁইছা জগঝপ্প পঁহুছা দ্রাবিড়ী আঁকুড়ি ঈদৃক জগদম্বা
          টঙ্ক অংশিন্‌ জগদ্গৌরী আঁচা তকরার তিলপিটালি গজ-দাঁত অংশু ঈপ্সনীয় পইতা
          শংকরাভরণ হংসগমন পকড় অংশুধর ঈপ্সু ঈর্ষী জগদ্ধাত্রী আঁজনাই তক্তি
          শংসনপত্র হংসারূঢ়া দংশল তক্ষক অংশুমান ইকেবানা জগদ্বন্ধু ঈশিত্ব
          ইক্ষ্বাকু আঁজি অংসকুট টঙ্কক
        </p>
        <div className="flex justify-end">
          <Link to="/welcome" className="mainBtn mt-2 w-full text-center">
            আরো পড়ুন <ArrowRightAltIcon />
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-auto mt-5">
        <iframe
          className="lg:w-[403px] h-72 w-full"
          src="https://www.youtube.com/embed/feVAKA4yen4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Welcome;
