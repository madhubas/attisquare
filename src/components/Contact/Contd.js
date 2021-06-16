import React from "react";
import "./Contd.css";
import { Container, Row, Col } from "react-bootstrap";
import fb from "../Home/images/facebook.png";
import insta from "../Home/images/instagram.png";
import twitter from "../Home/images/twitter.png";

const Contd = () => {
  return (
    <div>
      <h1 className="about-title">Contact Us</h1>
      <Row className="cont">
        <Col md={6}>
          <div id="con-card">
            <div className="directors">
              <h2 className="h2-title">Atti Square LLP</h2>
              <div className="address">
                <h2 className="h2-title">ADDRESS1</h2>

                <p>
                  Old No 79 , New, no 167, Eldams Rd, Teynampet, Chennai, Tamil
                  Nadu 600018
                  <br />
                  <h2 className="h2-title">ADDRESS2</h2>
                  No 722, 558, Thiruvottiyur High Rd, Korukkupet, Old
                  Washermanpet, Chennai, Tamil Nadu 600021
                  <br />
                </p>
              </div>
            </div>
            <ul className="social-icons">
              <li>
                <a href="/">
                  <img src={fb} alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={twitter} alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={insta} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={6}>
          <div className="map">
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=133OjlGT9hih0ugXj3svesIQrwVK6FHcE"></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contd;
