import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";
import newsImage from "../../assets/news1.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Recent = () => {
  return (
    <div className="my-20">
      <h1 className="text-center text-xl ">সাম্প্রতিক কার্যক্রম</h1>
      <div className="px-5 lg:px-0 mt-10">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },

            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="shadow-lg">
              <div>
                <img src={newsImage} alt="" className="w-full mb-3" />
                <span className="text-black/70 my-3 block">
                  <CalendarMonthIcon className="text-teal-600" /> 10 jul, 2023
                </span>
              </div>
              <div className="p-3">
                <p className="text-lg font-semibold mb-3">
                  সেকালের হরকরা নামক ইংরেজি পত্রিকায় দেখিতাম
                </p>
                <p className="text-base">
                  আয়রে ভোলা খেয়াল-খোলা , স্বপনদোলা নাচিয়ে আয় , আয়রে পাগল
                  আবোল তাবোল
                </p>
                <div className="flex justify-end">
                  <Link
                    to="/recent"
                    className="px-5 py-1 rounded-3xl border border-teal-500 flex items-center gap-5"
                  >
                    <AddIcon />
                    আরো পড়ুন
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-lg">
              <div>
                <img src={newsImage} alt="" className="w-full mb-3" />
                <span className="text-black/70 my-3 block">
                  <CalendarMonthIcon className="text-teal-600" /> 10 jul, 2023
                </span>
              </div>
              <div className="p-3">
                <p className="text-lg font-semibold mb-3">
                  সেকালের হরকরা নামক ইংরেজি পত্রিকায় দেখিতাম
                </p>
                <p className="text-base">
                  আয়রে ভোলা খেয়াল-খোলা , স্বপনদোলা নাচিয়ে আয় , আয়রে পাগল
                  আবোল তাবোল
                </p>
                <div className="flex justify-end">
                  <Link
                    to="/recent"
                    className="px-5 py-1 rounded-3xl border border-teal-500 flex items-center gap-5"
                  >
                    <AddIcon />
                    আরো পড়ুন
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-lg">
              <div>
                <img src={newsImage} alt="" className="w-full mb-3" />
                <span className="text-black/70 my-3 block">
                  <CalendarMonthIcon className="text-teal-600" /> 10 jul, 2023
                </span>
              </div>
              <div className="p-3">
                <p className="text-lg font-semibold mb-3">
                  সেকালের হরকরা নামক ইংরেজি পত্রিকায় দেখিতাম
                </p>
                <p className="text-base">
                  আয়রে ভোলা খেয়াল-খোলা , স্বপনদোলা নাচিয়ে আয় , আয়রে পাগল
                  আবোল তাবোল
                </p>
                <div className="flex justify-end">
                  <Link
                    to="/recent"
                    className="px-5 py-1 rounded-3xl border border-teal-500 flex items-center gap-5"
                  >
                    <AddIcon />
                    আরো পড়ুন
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-lg">
              <div>
                <img src={newsImage} alt="" className="w-full mb-3" />
                <span className="text-black/70 my-3 block">
                  <CalendarMonthIcon className="text-teal-600" /> 10 jul, 2023
                </span>
              </div>
              <div className="p-3">
                <p className="text-lg font-semibold mb-3">
                  সেকালের হরকরা নামক ইংরেজি পত্রিকায় দেখিতাম
                </p>
                <p className="text-base">
                  আয়রে ভোলা খেয়াল-খোলা , স্বপনদোলা নাচিয়ে আয় , আয়রে পাগল
                  আবোল তাবোল
                </p>
                <div className="flex justify-end">
                  <Link
                    to="/recent"
                    className="px-5 py-1 rounded-3xl border border-teal-500 flex items-center gap-5"
                  >
                    <AddIcon />
                    আরো পড়ুন
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-lg">
              <div>
                <img src={newsImage} alt="" className="w-full mb-3" />
                <span className="text-black/70 my-3 block">
                  <CalendarMonthIcon className="text-teal-600" /> 10 jul, 2023
                </span>
              </div>
              <div className="p-3">
                <p className="text-lg font-semibold mb-3">
                  সেকালের হরকরা নামক ইংরেজি পত্রিকায় দেখিতাম
                </p>
                <p className="text-base">
                  আয়রে ভোলা খেয়াল-খোলা , স্বপনদোলা নাচিয়ে আয় , আয়রে পাগল
                  আবোল তাবোল
                </p>
                <div className="flex justify-end">
                  <Link
                    to="/recent"
                    className="px-5 py-1 rounded-3xl border border-teal-500 flex items-center gap-5"
                  >
                    <AddIcon />
                    আরো পড়ুন
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-lg">
              <div>
                <img src={newsImage} alt="" className="w-full mb-3" />
                <span className="text-black/70 my-3 block">
                  <CalendarMonthIcon className="text-teal-600" /> 10 jul, 2023
                </span>
              </div>
              <div className="p-3">
                <p className="text-lg font-semibold mb-3">
                  সেকালের হরকরা নামক ইংরেজি পত্রিকায় দেখিতাম
                </p>
                <p className="text-base">
                  আয়রে ভোলা খেয়াল-খোলা , স্বপনদোলা নাচিয়ে আয় , আয়রে পাগল
                  আবোল তাবোল
                </p>
                <div className="flex justify-end">
                  <Link
                    to="/recent"
                    className="px-5 py-1 rounded-3xl border border-teal-500 flex items-center gap-5"
                  >
                    <AddIcon />
                    আরো পড়ুন
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Recent;
