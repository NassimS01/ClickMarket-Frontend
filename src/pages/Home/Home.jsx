import React from "react";
import Slider from "../../components/Slider/Slider";
import Landing from "../../components/Landing/Landing";
import Newsletter from "../../components/Newsletter/Newsletter";


const Home = () => {
  return (
    <>
      <Slider />
      <Landing />
      <Newsletter/>
    </>
  );
};

export default Home;