import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import "./Contd.css";
import { Container, Row, Col } from "react-bootstrap";

const Contd = () => {
  return (
    <div>
      <h1 className="about-title">Contact Us</h1>
      <Row className="cont">
        <Col md={6}>
          <div id="con-card">
            <div className="directors">
              <h2 className="h2-title">DIRECTORS</h2>
              <h4>Mr. Amit Shital</h4>
              <p>
                <FaMobileAlt /> +91 98704 05545
                <br />
                <FaEnvelope /> amit@omganeshaya.c
              </p>
              <h4>Mr. Sumit Shital</h4>
              <p>
                <FaMobileAlt /> +91 98217 87604
                <br />
                <FaEnvelope /> sumit@omganeshaya.com
              </p>
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
