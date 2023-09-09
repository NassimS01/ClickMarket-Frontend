import React from "react";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/footer";
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