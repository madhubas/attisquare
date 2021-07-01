import React from "react";
import FirstSection from "./FirstSection";
// import Parag from "./paragraph-sec/parag";
import Order from "./Order/Order";
import Testimonial from "./Testimonial/Testimonial";
import Scroll from "../Scroll/Scroll";

const Home = () => {
  return (
    <div>
      {/* <Scroll /> */}
      <FirstSection />
      <Order />
      {/* <Parag /> */}
      <Testimonial />
    </div>
  );
};

export default Home;
