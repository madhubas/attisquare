import React from "react";
import "./FirstSection.css";
import fb from "./images/facebook.png";
import twitter from "./images/twitter.png";
import insta from "./images/instagram.png";
import coke from "./images/kisspng-wrap-fast-food-shawarma-doner-kebab-kebab-5ab9b923821f44.511852611522120995533-removebg-preview.png";

const FirstSection = () => {
  return (
    <>
      <section>
        <div className="circle"></div>
        <div className="content">
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
        </ul>
      </section>
    </>
  );
};

export default FirstSection;
