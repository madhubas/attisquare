import "./Appcon.css";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Faqform from "./Faqform/Faqform";
import Faq from "./FAQ/Faq";
function Contact() {
  return (
    <div className="faq">
      <Row>
        <Col md={6} className="faqform">
          <Faqform />
        </Col>
        <Col md={6} className="faqaccordian">
          <Faq />
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
