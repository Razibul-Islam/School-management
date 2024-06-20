import React, { useEffect, useState } from "react";
import image1 from "../../assets/slide1.png";
import image2 from "../../assets/slide2.png";
import image3 from "../../assets/slide3.png";
import image4 from "../../assets/slide4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  const [notice, setNotice] = useState([]);
  // const [getId, setGetId] = useState(null);

  useEffect(() => {
    const url = "http://localhost:5000/get-notice";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNotice(data));
  }, []);
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-between items-start mt-10 ">
      <div className="lg:w-2/3 w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img
                src={image1}
                alt="Slider"
                className="object-cover h-full w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={image2}
                alt="Slider"
                className="object-cover h-full w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={image3}
                alt="Slider"
                className="object-cover h-full w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={image4}
                alt="Slider"
                className="object-cover h-full w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="ml-5 mt-5 lg:mt-0 flex flex-col w-full">
        {notice?.slice(0, 3).map((singleNotice, i) => (
          <div key={i} className="p-2 bg-slate-100 my-2">
            <p className="my-2 text-teal-600">{singleNotice.title}</p>
            <p>
              {singleNotice.prahgraph.length <= 60
                ? singleNotice.prahgraph
                : `${singleNotice.prahgraph.slice(0, 60)}...`}
            </p>
            <p className="flex justify-between items-center w-full mt-2 text-teal-500">
              <span>
                <CalendarMonthIcon className="mr-1" />
                {new Date(singleNotice.time).toLocaleString()}
              </span>
              <Link
                to={`/more/${singleNotice._id}`}
                className="rounded-3xl bg-teal-300 px-3 py-2 bg-gradient-to-r from-teal-500 to-green-300 text-white font-bold text-right flex items-center"
              >
                আরো পড়ুন <ArrowForwardIcon />
              </Link>
            </p>
          </div>
        ))}
        <div className="flex justify-end items-center mt-3">
          <Link to="/notice" className="mainBtn mt-2">
            আরো দেখুন
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
