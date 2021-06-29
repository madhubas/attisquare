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
                  <button className="read-more-btn" onClick={handleModal}>
                    {" "}
                    Read More
                  </button>
                </p>
                <Modal show={show} onClose={closeModal} />
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
                  <button className="read-more-btn" onClick={handleModal}>
                    Read More
                  </button>
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
                  <button className="read-more-btn" onClick={handleModal}>
                    Read More
                  </button>
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
                  <button className="read-more-btn" onClick={handleModal}>
                    Read More
                  </button>
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
                  <button className="read-more-btn" onClick={handleModal}>
                    Read More
                  </button>
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
                  <button className="read-more-btn" onClick={handleModal}>
                    Read More
                  </button>
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

            <form
              method="POST"
              className="contactform"
              action="https://formsubmit.co/madhubas2k@gmail.com"
            >
              <input type="hidden" name="_captcha" value="false" />
              <p className="input_wrapper">
                <input
                  type="text"
                  name="Name"
                  id="contact_nom"
                  placeholder="Name"
                  required
                />
              </p>
              <p className="input_wrapper">
                <input
                  type="text"
                  name="contact_email"
                  id="contact_email"
                  placeholder="Email"
                  required
                />
              </p>
              <p className="input_wrapper">
                <input
                  type="text"
                  name="contact_No"
                  id="contact_sujet"
                  placeholder="Phone No"
                  required
                />
              </p>
              <p className="input_wrapper">
                <input
                  type="text"
                  name="city"
                  id="contact_sujet"
                  placeholder="City"
                  required
                />
              </p>
              <p className="input_wrapper">
                <input
                  type="text"
                  name="Position"
                  id="contact_sujet"
                  placeholder="Position"
                  required
                />
              </p>
              <br />
              <p className="input_wrapper">
                <input
                  type="text"
                  name="resume"
                  id="contact_sujet"
                  placeholder="Insert your pdf drive link"
                  required
                />
              </p>
              <p className="textarea_wrapper">
                <textarea
                  name="contact_message"
                  id="contact_message"
                  placeholder="Message"
                  required
                ></textarea>
              </p>

              <p>
                <input type="submit" className="but" />
              </p>
            </form>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Work;
