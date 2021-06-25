import React, { useState } from "react";
import "./Faq.scss";

const Faq = () => {
  //   const items = document.querySelectorAll(".accordion button");

  const [toggle, setToggle] = useState({
    toggle1: true,
    toggle2: false,
    toggle3: false,
    toggle4: false,
    toggle5: false,
    toggle6: false,
    toggle7: false,
  });

  return (
    <div className="faqacc">
      <div class="container">
        <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
        <hr className="sep" />{" "}
        <div class="accordion">
          <div class="accordion-item">
            <button
              id="accordion-button-1"
              aria-expanded={toggle["toggle1"]}
              onClick={() =>
                toggle.toggle1 === false
                  ? setToggle({
                      ...toggle,
                      toggle1: true,
                      toggle2: false,
                      toggle3: false,
                      toggle4: false,
                      toggle5: false,
                      toggle6: false,
                      toggle7: false,
                    })
                  : setToggle({
                      ...toggle,
                      toggle1: false,
                      toggle2: false,
                      toggle3: false,
                      toggle4: false,
                      toggle5: false,
                      toggle6: false,
                      toggle7: false,
                    })
              }
            >
              <span class="accordion-title">
                WHAT IS ATTI SQUARE'S FRANCHISE?
              </span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                viverra suspendisse potenti.
              </p>
            </div>
          </div>
          <div class="accordion-item">
            <button
              id="accordion-button-2"
              aria-expanded={toggle["toggle2"]}
              onClick={() =>
                toggle.toggle2 === false
                  ? setToggle({
                      ...toggle,
                      toggle2: true,
                      toggle1: false,
                      toggle3: false,
                      toggle4: false,
                      toggle5: false,
                      toggle6: false,
                      toggle7: false,
                    })
                  : setToggle({
                      ...toggle,
                      toggle2: false,
                      toggle1: false,
                      toggle3: false,
                      toggle4: false,
                      toggle5: false,
                      toggle6: false,
                      toggle7: false,
                    })
              }
            >
              <span class="accordion-title">
                HOW MUCH DOES THE FRANCHISE COST?
              </span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                viverra suspendisse potenti.
              </p>
            </div>
          </div>
          <div class="accordion-item">
            <button
              id="accordion-button-3"
              aria-expanded={toggle["toggle3"]}
              onClick={() =>
                toggle.toggle3 === false
                  ? setToggle({
                      ...toggle,
                      toggle3: true,
                      toggle2: false,
                      toggle1: false,
                      toggle4: false,
                      toggle5: false,
                      toggle6: false,
                      toggle7: false,
                    })
                  : setToggle({
                      ...toggle,
                      toggle3: false,
                      toggle2: false,
                      toggle1: false,
                      toggle4: false,
                      toggle5: false,
                      toggle6: false,
                      toggle7: false,
                    })
              }
            >
              <span class="accordion-title">
                WILL I HAVE AN EXCLUSIVE TERRITORY?{" "}
              </span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                viverra suspendisse potenti.
              </p>
            </div>
          </div>
          <div class="accordion-item">
            <button
              id="accordion-button-4"
              aria-expanded={toggle["toggle4"]}
              onClick={() =>
                toggle.toggle4 === false
                  ? setToggle({
                      ...toggle,
                      toggle4: true,
                      toggle2: false,
                      toggle3: false,
                      toggle1: false,
                      toggle5: false,
                      toggle6: false,
                      toggle7: false,
                    })
                  : setToggle({
                      ...toggle,
                      toggle4: false,
                      toggle2: false,
                      toggle3: false,
                      toggle1: false,
                      toggle5: false,
                      toggle6: false,
                      toggle7: false,
                    })
              }
            >
              <span class="accordion-title">
                HOW MUCH TRAINING IS PROVIDED IN THE ATTI SQUARE FRANCHISE
                SYSTEM?
              </span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                viverra suspendisse potenti.
              </p>
            </div>
          </div>
          <div class="accordion-item">
            <button
              id="accordion-button-5"
              aria-expanded={toggle["toggle5"]}
              onClick={() =>
                toggle.toggle5 === false
                  ? setToggle({
                      ...toggle,
                      toggle5: true,
                      toggle2: false,
                      toggle3: false,
                      toggle4: false,
                      toggle1: false,
                      toggle6: false,
                      toggle7: false,
                    })
                  : setToggle({
                      ...toggle,
                      toggle5: false,
                      toggle2: false,
                      toggle3: false,
                      toggle4: false,
                      toggle1: false,
                      toggle6: false,
                      toggle7: false,
                    })
              }
            >
              <span class="accordion-title">
                WHAT IS THE TERM OF THE FRANCHISE AGREEMENT?
              </span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                viverra suspendisse potenti.
              </p>
            </div>
          </div>
          <div class="accordion-item">
            <button
              id="accordion-button-5"
              aria-expanded={toggle["toggle6"]}
              onClick={() =>
                toggle.toggle6 === false
                  ? setToggle({
                      ...toggle,
                      toggle6: true,
                      toggle2: false,
                      toggle3: false,
                      toggle4: false,
                      toggle1: false,
                      toggle5: false,
                      toggle7: false,
                    })
                  : setToggle({
                      ...toggle,
                      toggle5: false,
                      toggle2: false,
                      toggle3: false,
                      toggle4: false,
                      toggle1: false,
                      toggle6: false,
                      toggle7: false,
                    })
              }
            >
              <span class="accordion-title">
                WHAT ARE THE SUPPORT SERVICES PROVIDED BY THE FRANCHISE SYSTEM?
              </span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                viverra suspendisse potenti.
              </p>
            </div>
          </div>
          <div class="accordion-item">
            <button
              id="accordion-button-5"
              aria-expanded={toggle["toggle7"]}
              onClick={() =>
                toggle.toggle7 === false
                  ? setToggle({
                      ...toggle,
                      toggle7: true,
                      toggle2: false,
                      toggle3: false,
                      toggle4: false,
                      toggle1: false,
                      toggle5: false,
                      toggle6: false,
                    })
                  : setToggle({
                      ...toggle,
                      toggle5: false,
                      toggle2: false,
                      toggle3: false,
                      toggle4: false,
                      toggle1: false,
                      toggle7: false,
                      toggle6: false,
                    })
              }
            >
              <span class="accordion-title">WHAT IS MY NEXT STEP?</span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                viverra suspendisse potenti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
