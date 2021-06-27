import React from "react";
import shawarma from "./images/_hvd1306_1 (1).webp";
import person from "./images/_hvd1170 (1).webp";
import "./About1.css";
import { Button } from "react-bootstrap";
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
          <img id="side-image1" src={shawarma} alt="" />
        </div>
      </div>
      <div className="parent2">
        <div className="text-about">
          <div className="content-para">
            <h2 className="about1-title">Why we Stand Apart</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
              porro facilis. Libero distinctio nihil ab animi id obcaecati,
              dicta incidunt rem quod, odio autem aliquid fuga, enim tempora
              praesentium placeat. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repellendus possimus illum vel odio ullam?
              Cupiditate laudantium aliquid, possimus, perferendis dicta
              voluptas maxime minus alias unde eos minima fuga quam totam.
            </p>
          </div>
        </div>
      </div>
      <div className="parent1">
        <div className="child-img">
          <img id="side-image2" src={person} alt="" />
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
