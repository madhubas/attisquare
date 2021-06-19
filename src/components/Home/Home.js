import React from "react";
import Menu from "./Menu/Menu";
import FirstSection from "./FirstSection";
import Parag from "./paragraph-sec/parag";
import Order from "./Order/Order";

const Home = () => {
  return (
    <div>
      <FirstSection />
      {/* <Menu /> */}
      <Order />
      <Parag />
    </div>
  );
};

export default Home;
