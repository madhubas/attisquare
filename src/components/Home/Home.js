import React from "react";
import FirstSection from "./FirstSection";
// import Parag from "./paragraph-sec/parag";
import Order from "./Order/Order";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <FirstSection />
      <Order />
      {/* <Parag /> */}
      <Testimonial />
    </div>
  );
};

export default Home;
