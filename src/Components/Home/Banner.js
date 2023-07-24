import React, { useEffect, useState } from "react";
import image1 from "../../assets/slide1.png";
import image2 from "../../assets/slide2.png";
import image3 from "../../assets/slide3.png";
import image4 from "../../assets/slide4.png";
import { Swiper, SwiperSlide } from "swiper/react";

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
  // console.log(getId);
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-between items-start px-2 mt-10">
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
      <div className="md:mx-5 flex flex-col gap-5 w-full">
        {notice.slice(0, 3).map((singleNotice, i) => (
          <div
            key={i}
            className="border-2 border-blue-200 p-3 rounded flex flex-col justify-center items-end"
          >
            <p className="font-semibold mb-3">{singleNotice.title}</p>
            <p>
              {singleNotice.prahgraph.length <= 60
                ? singleNotice.prahgraph
                : `${singleNotice.prahgraph.slice(0, 60)}...`}
            </p>
            <p className="flex justify-between items-center w-full mt-1">
              <span>{new Date(singleNotice.time).toLocaleString()}</span>
              {/* <Link
                onClick={() => setGetId(singleNotice._id)}
                to="/more"
                className="text-[#002147] font-bold text-right"
              >
                আরো পড়ুন
              </Link> */}
              {/* <div onClick={() => setGetId(singleNotice._id)}> */}
              <Link
                to={`/more/${singleNotice._id}`}
                className="text-[#002147] font-bold text-right"
              >
                আরো পড়ুন
              </Link>
              {/* </div> */}
            </p>
          </div>
        ))}
        <div className="flex justify-end items-center">
          <Link
            to="/notice"
            className="text-xl mr-2 font-bold cursor-pointer inline-block mainBtn"
          >
            See All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
