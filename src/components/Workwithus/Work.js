import React, { useState } from "react";
import "./Work.css";
import { Row, Col } from "react-bootstrap";
import Modal from "./../Modal/Modal";
const Work = () => {
  const [show, setShow] = useState(false);

  var handleModal = () => {
    setShow(true);
  };

  var closeModal = () => {
    setShow(false);
  };

  return (
    <section className="work">
      <div className="work-hero" id="works">
        <h1 className="hero-text">Work With Us</h1>
      </div>

      <div className="job-req">
        <h3>WE ARE LOOKING FOR POTENTIAL CANDIDATES FOR BELOW POSITIONS.</h3>
        <div className="req-cards">
          <Row>
            <Col sm={4}>
              <div className="req-card">
                <h4>Kitchen Staff</h4>
                <p>
                  Experience: More than 1-year experience in Café/Hotel industry
                </p>
                <p>Location : Chennai</p>
                <p>
                  <button onClick={handleModal}> Read More</button>
                </p>
                <p>
                  <Modal show={show} onClose={closeModal} />
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="req-card">
                <h4>Kitchen Staff</h4>
                <p>
                  Experience: More than 1-year experience in Café/Hotel industry
                </p>
                <p>Location : Chennai</p>
                <p>
                  <button onClick={handleModal}>Read More</button>
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="req-card">
                <h4>Kitchen Staff</h4>
                <p>
                  Experience: More than 1-year experience in Café/Hotel industry
                </p>
                <p>Location : Chennai</p>
                <p>
                  <button onClick={handleModal}>Read More</button>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <div className="req-card">
                <h4>Kitchen Staff</h4>
                <p>
                  Experience: More than 1-year experience in Café/Hotel industry
                </p>
                <p>Location : Chennai</p>
                <p>
                  <button onClick={handleModal}>Read More</button>
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="req-card">
                <h4>Kitchen Staff</h4>
                <p>
                  Experience: More than 1-year experience in Café/Hotel industry
                </p>
                <p>Location : Chennai</p>
                <p>
                  <button onClick={handleModal}>Read More</button>
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="req-card">
                <h4>Kitchen Staff</h4>
                <p>
                  Experience: More than 1-year experience in Café/Hotel industry
                </p>
                <p>Location : Chennai</p>
                <p>
                  <button onClick={handleModal}>Read More</button>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="body1">
        <section id="contact">
          <article className="article-section">
            <div className="sectionheader">
              {" "}
              <h1>JOIN US</h1>
            </div>

            <form action="" method="post" className="contactform">
              <p className="input_wrapper">
                <input
                  type="text"
                  name="contact_nom"
                  id="contact_nom"
                  placeholder="Name"
                />
              </p>
              <p className="input_wrapper">
                <input
                  type="text"
                  name="contact_email"
                  id="contact_email"
                  placeholder="Email"
                />
              </p>
              <p className="input_wrapper">
                <input
                  type="text"
                  name="contact_sujet"
                  id="contact_sujet"
                  placeholder="Phone No"
                />
              </p>
              <p className="input_wrapper">
                <input
                  type="text"
                  name="contact_sujet"
                  id="contact_sujet"
                  placeholder="City"
                />
              </p>
              <p className="input_wrapper">
                <input
                  type="text"
                  name="contact_sujet"
                  id="contact_sujet"
                  placeholder="Position"
                />
              </p>
              <br />
              <p>
                <input
                  type="file"
                  className="file "
                  name="contact_sujet"
                  id=""
                />
              </p>
              <p className="textarea_wrapper">
                <textarea
                  name="contact_message"
                  id="contact_message"
                  placeholder="Message"
                ></textarea>
              </p>
            </form>
            <p>
              <button className="sub-btn">Apply</button>
            </p>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Work;
