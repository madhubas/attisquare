import React from "react";
import "./FirstSection.css";
import fb from "./images/facebook.png";
import twitter from "./images/twitter.png";
import insta from "./images/instagram.png";
import coke from "./images/kisspng-wrap-fast-food-shawarma-doner-kebab-kebab-5ab9b923821f44.511852611522120995533-removebg-preview.png";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../Home/images/_hvd1304_1 (1).jpg";
import image2 from "../Home/images/_HVD1231_2-min.jpg";
import image3 from "../Home/images/_HVD1247_1-min.jpg";
import { Button } from "react-bootstrap";
const FirstSection = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="content">
            <div className="textBox">
              <h2>Taste the Feeling</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                aperiam necessitatibus corporis recusandae ipsum ad nisi sint
                soluta iusto ratione, reiciendis explicabo officiis nesciunt
                odit libero delectus ea reprehenderit amet.
              </p>
              <Button className="button">Read More</Button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default FirstSection;

{
  /* <div className="content">
          <div className="textBox">
            <h2>Taste the Feeling</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              aperiam necessitatibus corporis recusandae ipsum ad nisi sint
              soluta iusto ratione, reiciendis explicabo officiis nesciunt odit
              libero delectus ea reprehenderit amet.
            </p>
            <a href="/">Learn More</a>
          </div>
          <div className="imgBox">
            <img src={coke} alt="" />
          </div>
        </div>
        <ul className="social">
          <li>
            <a href="https://www.facebook.com/attisquare/" target="_blank">
              <img src={fb} alt="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/attisquare/"
              className="link"
              target="_blank"
            >
              <img src={insta} alt="" />
            </a>
          </li>
        </ul> */
}
