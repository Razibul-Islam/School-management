import React from "react";
import Banner from "../Components/Home/Banner";
import Principal from "../Components/Home/Principal";
import Welcome from "../Components/Home/Welcome";
import Latest from "../Components/Home/Leatest";

const Home = () => {
  return (
    <div class="max-w-7xl mx-auto">
      <Banner />
      <Principal />
      <Welcome />
      <Latest />
    </div>
  );
};

export default Home;
