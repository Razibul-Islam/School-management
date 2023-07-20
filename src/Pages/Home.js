import React from "react";
import Banner from "../Components/Home/Banner";
import Principal from "../Components/Home/Principal";
import Welcome from "../Components/Home/Welcome";
import Latest from "../Components/Home/Leatest";
import BasicInformation from "../Components/Home/BasicInformation";

const Home = () => {
  return (
    <div class="max-w-7xl mx-auto">
      <Banner />
      <Principal />
      <Welcome />
      <Latest />
      <BasicInformation />
    </div>
  );
};

export default Home;
