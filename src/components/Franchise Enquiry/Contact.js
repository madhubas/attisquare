import "./Appcon.css";
import React from "react";
import { Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <div id="contact-box">
      <div className="colu">
        <span>
          <h2 id="contact-title">Franchise Enquiry</h2>
        </span>
        <form
          className="form"
          action="https://formsubmit.co/madhubas2k@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />

          <span id="fieldset">Fill in the form for franchise enquiries</span>
          <div className="form-main">
            <Row>
              <Col sm={12} lg={3} md={6}>
                <input
                  type="text"
                  placeholder="Name"
                  id="left"
                  name="name"
                ></input>
              </Col>
              <Col sm={12} lg={3} md={6}>
                {" "}
                <input
                  type="text"
                  placeholder="Email-id"
                  id="right"
                  name="email"
                  required
                ></input>{" "}
              </Col>
              <Col sm={12} lg={3} md={6}>
                {" "}
                <input
                  type="text"
                  placeholder="Phone No"
                  id="left"
                  name="phone"
                  required
                ></input>
              </Col>
              <Col sm={12} lg={3} md={6}>
                <input
                  type="text"
                  placeholder="City"
                  id="right"
                  name="city"
                  required
                ></input>
              </Col>
            </Row>
            <Row>
              <Col sm={12} lg={3} md={6}>
                <input
                  type="text"
                  placeholder="Pincode"
                  id="left"
                  name="pincode"
                  required
                ></input>
              </Col>
              <Col sm={12} lg={3} md={6}>
                <input
                  type="text"
                  placeholder="State"
                  id="right"
                  name="state"
                  required
                ></input>
              </Col>
              <Col sm={12} lg={3} md={6}>
                {" "}
                <select
                  placeholder="Investment"
                  name="Investment"
                  id="left"
                  required
                >
                  <option hidden selected>
                    Investment
                  </option>
                  <option>10L - 20L</option>
                  <option>20L - 30L</option>
                </select>
              </Col>
              <Col sm={12} lg={3} md={6}>
                <input
                  type="text"
                  placeholder="Message"
                  id="right"
                  name="message"
                  required
                ></input>{" "}
              </Col>
            </Row>
            <input type="submit" className="but" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
