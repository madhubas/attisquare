import React from "react";
import shawarma from "./shawarma-image.png";
import "./About1.css";
import Menu from "../Home/Menu/Menu";

const About1 = () => {
  return (
    <div className="parent">
      <h1 className="parent-title">About Us</h1>
      <div className="parent1">
        <div className="child-content">
          <h2 className="about1-title">Who We Are</h2>
          <p className="about1-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            corporis enim sed suscipit, aut distinctio maxime, praesentium totam
            voluptas rerum repudiandae hic eaque et velit facere aperiam
            voluptate nemo necessitatibus. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ipsa, optio, aliquam dolores quasi quo
            maiores pariatur maxime ab laboriosam animi iste delectus tempora
            ipsam illo doloremque, doloribus rem esse vel.
          </p>
        </div>
        <div className="child-img">
          <img src={shawarma} alt="" />
        </div>
      </div>

      <div className="parent2">
        <h2 className="about1-title">What We Do</h2>
        <Menu />
      </div>

      <div className="parent1">
        <div className="child-img">
          <img src={shawarma} alt="" />
        </div>
        <div className="child2-content">
          <h2 className="about2-title">How We Do It</h2>

          <p className="about2-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            corporis enim sed suscipit, aut distinctio maxime, praesentium totam
            voluptas rerum repudiandae hic eaque et velit facere aperiam
            voluptate nemo necessitatibus. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ipsa, optio, aliquam dolores quasi quo
            maiores pariatur maxime ab laboriosam animi iste delectus tempora
            ipsam illo doloremque, doloribus rem esse vel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About1;
