import React from "react";
import Banner from "../Components/Home/Banner";
import Principal from "../Components/Home/Principal";
import Welcome from "../Components/Home/Welcome";
import Latest from "../Components/Home/Leatest";
import BasicInformation from "../Components/Home/BasicInformation";
import Recent from "../Components/Home/Recent";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner />
      <Principal />
      <Welcome />
      <Latest />
      <BasicInformation />
      <Recent />
    </div>
  );
};

export default Home;
