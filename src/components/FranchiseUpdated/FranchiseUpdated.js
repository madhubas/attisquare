import React, { useState } from "react";
import "./FranchiseUpdated.css";
import { GiPuzzle } from "react-icons/gi";
import { GrStatusGood } from "react-icons/gr";
import { GrSystem } from "react-icons/gr";
import { GiGrowth } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { Row, Col, Container } from "react-bootstrap";
import { AiFillTags } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
import { BsMap } from "react-icons/bs";
import { BsFillBarChartFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { HiCubeTransparent } from "react-icons/hi";

import { RiFilePaper2Line } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";

import { GoLocation } from "react-icons/go";
import { GoVerified } from "react-icons/go";
import { GoTools } from "react-icons/go";
const FranchiseUpdated = () => {
  const [active, setActive] = useState("home");

  return (
    <section style={{ background: "#efefe9" }} className="franchise-u">
      <div>
        <div className="row">
          <div className="board">
            <h2>Franchise</h2>
            <div className="board-inner">
              <ul className="nav nav-tabs" id="myTab">
                <div className="liner"></div>
                <li className={` ${active === "home" ? "active" : " "}`}>
                  <a data-toggle="tab" onClick={() => setActive("home")}>
                    <div className="tab-menu-content">
                      <span className="tab-title">Profile</span>
                      <span className="round-tabs one">
                        <i className="far fa-user"></i>
                      </span>
                    </div>
                  </a>
                </li>

                <li className={active === "profile" ? "active" : " "}>
                  <a
                    data-toggle="tab"
                    title="profile"
                    onClick={() => setActive("profile")}
                  >
                    <div className="tab-menu-content">
                      <span className="tab-title">What we do</span>

                      <span className="round-tabs two">
                        <img
                          className="icon"
                          src="https://img.icons8.com/ios/50/000000/we.png"
                        />{" "}
                      </span>
                    </div>
                  </a>
                </li>
                <li className={active === "messages" ? "active" : " "}>
                  <a data-toggle="tab" onClick={() => setActive("messages")}>
                    <div className="tab-menu-content">
                      <span className="tab-title">Benefits</span>
                      <span className="round-tabs three">
                        <img
                          className="icon"
                          src="https://img.icons8.com/wired/64/000000/get-cash.png"
                        />{" "}
                      </span>{" "}
                    </div>
                  </a>
                </li>

                <li className={active === "settings" ? "active" : " "}>
                  <a data-toggle="tab" onClick={() => setActive("settings")}>
                    <div className="tab-menu-content">
                      <span className="tab-title">Process</span>
                      <span className="round-tabs four">
                        <img
                          className="icon"
                          src="https://img.icons8.com/ios/50/000000/escrow-process.png"
                        />{" "}
                      </span>
                    </div>
                  </a>
                </li>

                <li className={active === "doner" ? "active" : " "}>
                  <a
                    data-toggle="tab"
                    title="Franchise Model"
                    onClick={() => setActive("doner")}
                  >
                    <div className="tab-menu-content">
                      <span className="tab-title">Model</span>
                      <span className="round-tabs five">
                        <img
                          className="icon"
                          src="https://img.icons8.com/ios/48/000000/cottage--v1.png"
                        />{" "}
                      </span>{" "}
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content">
              <div
                className={
                  "tab-pane fade" + (active === "home" ? "in active" : " ")
                }
                id="home"
              >
                <h3 className="head text-center">
                  Franchise Profile Requirements{" "}
                  <span style={{ color: "#f48260" }}>♥</span>
                </h3>
                <p className="narrow text-center">
                  <div className="fran_para">
                    Typically, Atti Square is very selective in choosing its
                    franchising partners. While there is no set criteria, and
                    franchisees can come from a wide array of professional
                    backgrounds; they must all exhibit a strong commitment and
                    desire to succeed. Experience in the food and beverage
                    industry is essential along with the following:
                  </div>
                  <br />
                  <br />
                  <p className="points">
                    <Row>
                      <Col>
                        <GiPuzzle size={50} />
                        <br />
                        1. Good people skills, including business, management
                        and customer service skills.
                        <br />
                      </Col>

                      <br />
                      <Col>
                        <GrStatusGood size={50} />
                        <br />
                        2. High personal standards: excellence, honesty and
                        integrity.
                        <br />
                      </Col>
                    </Row>
                  </p>
                  <p className="points">
                    <Row>
                      <Col>
                        <GiGrowth size={50} />
                        <br />
                        3. Stability and maturity.
                        <br />
                      </Col>
                      <Col>
                        <GrSystem size={50} />
                        <br />
                        4. Ability to work within a system.
                        <br />
                      </Col>
                    </Row>
                  </p>
                  <p className="points">
                    <GiReceiveMoney size={50} />
                    <br />
                    5. Financial and commercial capacity to make their franchise
                    a success.
                    <br />
                  </p>
                  <br />
                  <p className="impor">
                    The Franchise Owner is Not Required to Participate in the
                    Day-to-Day Operations on a Full Time Basis as Long as a
                    Senior Manager is Appointed.
                  </p>
                </p>
              </div>
              <div
                className={
                  "tab-pane fade" + (active === "profile" ? "in active" : " ")
                }
                id="profile"
              >
                <h3 className="head text-center">What We Do</h3>
                <div className="what">
                  <div class="container5">
                    <div class="list5">
                      <Row>
                        <Col>
                          <div class="num">
                            <h3>
                              Wolf snackwave cray mustache typewriter butcher
                              tbh.
                            </h3>
                          </div>
                          <div class="num">
                            <h3>
                              Messenger bag normcore cardigan, brunch organic
                              tumblr locavore street art.
                            </h3>
                          </div>
                          <div class="num">
                            <h3>
                              Echo park iPhone intelligentsia literally 8-bit
                              pickled irony master cleanse activated charcoal
                              yuccie slow-carb ennui.
                            </h3>
                          </div>
                          <div class="num">
                            <h3>
                              Marfa pinterest shaman literally tbh crucifix
                              pop-up taiyaki tacos raw denim offal shoreditch
                              jean shorts yr.
                            </h3>
                          </div>
                          <div class="num">
                            <h3>
                              Ethical fixie man braid, pork belly shoreditch
                              tumeric cloud bread migas chillwave raclette
                              normcore freegan.
                            </h3>
                          </div>
                          <div class="num">
                            <h3>
                              Ethical fixie man braid, pork belly shoreditch
                              tumeric cloud bread migas chillwave raclette
                              normcore freegan.
                            </h3>
                          </div>
                        </Col>
                        <Col>
                          <div class="num">
                            <h3>
                              Ethical fixie man braid, pork belly shoreditch
                              tumeric cloud bread migas chillwave raclette
                              normcore freegan.
                            </h3>
                          </div>

                          <div class="num">
                            <h3>
                              Ethical fixie man braid, pork belly shoreditch
                              tumeric cloud bread migas chillwave raclette
                              normcore freegan.
                            </h3>
                          </div>
                          <div class="num">
                            <h3>
                              Ethical fixie man braid, pork belly shoreditch
                              tumeric cloud bread migas chillwave raclette
                              normcore freegan.
                            </h3>
                          </div>
                          <div class="num">
                            <h3>
                              Ethical fixie man braid, pork belly shoreditch
                              tumeric cloud bread migas chillwave raclette
                              normcore freegan.
                            </h3>
                          </div>
                          <div class="num">
                            <h3>
                              Ethical fixie man braid, pork belly shoreditch
                              tumeric cloud bread migas chillwave raclette
                              normcore freegan.
                            </h3>
                          </div>
                          <div class="num">
                            <h3>
                              Ethical fixie man braid, pork belly shoreditch
                              tumeric cloud bread migas chillwave raclette
                              normcore freegan.
                            </h3>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  "tab-pane fade" + (active === "messages" ? "in active" : " ")
                }
                id="messages"
              >
                <h3 className="head text-center">Franchise Benefits</h3>
                <Container>
                  <Row>
                    <Col>
                      <div class="container1">
                        <div class="card1">
                          <div class="box">
                            <div class="content-card">
                              <h2>
                                <AiFillTags />
                              </h2>
                              <h3>Powerful Brand Association</h3>
                              <p>
                                When you operate as a ATTI SQUARE franchise, you
                                enjoy all the privileges and awareness that come
                                with the careful development of our brand
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div class="container1">
                        <div class="card1">
                          <div class="box">
                            <div class="content-card">
                              <h2>
                                <BsFillPeopleFill />
                              </h2>
                              <h3>Comprehensive Training</h3>
                              <p>
                                As a ATTI SQUARE franchisee, you will also be
                                provided with technical and marketing support on
                                a continued basis, through email, telephone,
                                manual updates as well as training at our
                                headquarters in Mumbai. We will also make
                                ourselves available to visit your outlet for
                                business reviews, market development and general
                                business coordination. Re-training at store is
                                given every 3 months.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div class="container1">
                        <div class="card1">
                          <div class="box">
                            <div class="content-card">
                              <h2>
                                <HiSpeakerphone />
                              </h2>
                              <h3>Advertising and Marketing Programs</h3>
                              <p>
                                As a ATTI SQUARE franchisee, you will benefit
                                from our strong brand positioning and marketing
                                expertise. Ongoing extensive advertising
                                campaigns ensure that the ATTI SQUARE brand
                                achieves maximum awareness and drives maximum
                                footfall.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div class="container1">
                        <div class="card1">
                          <div class="box">
                            <div class="content-card">
                              <h2>
                                <HiCubeTransparent />
                              </h2>
                              <h3>New Products & Development</h3>
                              <p>
                                "Our menu is subject to continuing improvement
                                and quality increases. All, to reduce cost and
                                increase operational efficiency of existing menu
                                items."
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div class="container1">
                        <div class="card1">
                          <div class="box">
                            <div class="content-card">
                              <h2>
                                <BsMap />
                              </h2>
                              <h3>Site Selection & Development Assistance</h3>
                              <p>
                                Should you choose to become a franchisee, we
                                will assist you with site selection,
                                construction and renovation, installation of
                                cooking systems & point of sale communication.
                                Essentially, whole way through, from start to
                                finish.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div class="container1">
                        <div class="card1">
                          <div class="box">
                            <div class="content-card">
                              <h2>
                                <BsFillBarChartFill />
                              </h2>
                              <h3>Operational & Management Support</h3>
                              <p>
                                You will also be provided with technical and
                                marketing support and a continued basis, through
                                email, telephone, manual updates, as well as
                                training at your own site. We will also make
                                ourselves available to visit your outlet for
                                business reviews, market development and general
                                business coordination.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div
                className={
                  "tab-pane fade" + (active === "settings" ? "in active" : " ")
                }
                id="settings"
              >
                <h3 className="head text-center">Process</h3>
                <div class="timeline">
                  <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                    <div class="timeline__event__icon ">01</div>
                    <div class="timeline__event__date">
                      <AiFillHeart size={30} />
                    </div>
                    <div class="timeline__event__content ">
                      <div class="timeline__event__title">
                        Show you are Intrested
                      </div>
                      <div class="timeline__event__description">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Vel, nam! Nam eveniet ut aliquam ab asperiores,
                          accusamus iure veniam corporis incidunt reprehenderit
                          accusantium id aut architecto harum quidem dolorem in!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                    <div class="timeline__event__icon">02</div>
                    <div class="timeline__event__date">
                      <MdAccountCircle size={30} />
                    </div>
                    <div class="timeline__event__content">
                      <div class="timeline__event__title">
                        Register for a Franchise
                      </div>
                      <div class="timeline__event__description">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Vel, nam! Nam eveniet ut aliquam ab asperiores,
                          accusamus iure veniam corporis incidunt reprehenderit
                          accusantium id aut architecto harum quidem dolorem in!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                    <div class="timeline__event__icon">03</div>
                    <div class="timeline__event__date">
                      <RiFilePaper2Line size={30} />
                    </div>
                    <div class="timeline__event__content">
                      <div class="timeline__event__title">
                        Agree on Terms & Condition
                      </div>
                      <div class="timeline__event__description">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Vel, nam! Nam eveniet ut aliquam ab asperiores,
                          accusamus iure veniam corporis incidunt reprehenderit
                          accusantium id aut architecto harum quidem dolorem in!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="timeline__event animated fadeInUp timeline__event--type1">
                    <div class="timeline__event__icon">04</div>
                    <div class="timeline__event__date">
                      <GoLocation size={30} />
                    </div>
                    <div class="timeline__event__content">
                      <div class="timeline__event__title">
                        Find an Ideal Location
                      </div>
                      <div class="timeline__event__description">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Vel, nam! Nam eveniet ut aliquam ab asperiores,
                          accusamus iure veniam corporis incidunt reprehenderit
                          accusantium id aut architecto harum quidem dolorem in!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="timeline__event animated fadeInUp timeline__event--type2">
                    <div class="timeline__event__icon">05</div>
                    <div class="timeline__event__date">
                      <GoVerified size={30} />
                    </div>
                    <div class="timeline__event__content">
                      <div class="timeline__event__title">
                        Approval of the location
                      </div>
                      <div class="timeline__event__description">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Vel, nam! Nam eveniet ut aliquam ab asperiores,
                          accusamus iure veniam corporis incidunt reprehenderit
                          accusantium id aut architecto harum quidem dolorem in!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="timeline__event animated fadeInUp timeline__event--type3">
                    <div class="timeline__event__icon">06</div>
                    <div class="timeline__event__date">
                      <GoTools size={30} />
                    </div>
                    <div class="timeline__event__content">
                      <div class="timeline__event__title">
                        We will help you setup
                      </div>
                      <div class="timeline__event__description">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Vel, nam! Nam eveniet ut aliquam ab asperiores,
                          accusamus iure veniam corporis incidunt reprehenderit
                          accusantium id aut architecto harum quidem dolorem in!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  "tab-pane fade" + (active === "doner" ? "in active" : " ")
                }
                id="doner"
              >
                <div className="text-center">
                  <i className="img-intro icon-checkmark-circle"></i>
                </div>
                <h3 className="head text-center">Franchise Model</h3>
                <div class="container">
                  {/* <Row> */}
                  <ul class="cards">
                    {/* <Col> */}
                    <li class="card cards__item">
                      <div class="card__frame">
                        <div class="card__picture">
                          <img
                            src="https://image.flaticon.com/icons/svg/1496/1496034.svg"
                            alt=""
                            width="90"
                          />
                        </div>
                        <h2 class="card__title">Stand alone QSR</h2>

                        <p className="conp">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Neque ipsum veritatis id quia cupiditate sed
                          architecto aliquam nostrum unde nam minima voluptas
                          dicta, beatae sint reprehenderit sit ducimus officiis
                          ratione?
                        </p>
                      </div>
                    </li>
                    {/* </Col>
                      <Col> */}
                    <li class="card cards__item">
                      <div class="card__frame">
                        <div class="card__picture">
                          <img
                            src="https://image.flaticon.com/icons/svg/1336/1336494.svg"
                            alt=""
                            width="90"
                          />
                        </div>
                        <h2 class="card__title">Stand alone Takeaway</h2>
                        <p className="conp">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Neque ipsum veritatis id quia cupiditate sed
                          architecto aliquam nostrum unde nam minima voluptas
                          dicta, beatae sint reprehenderit sit ducimus officiis
                          ratione?
                        </p>
                      </div>
                    </li>
                    {/* </Col>
                      <Col> */}
                    <li class="card cards__item">
                      <div class="card__frame">
                        <div class="card__picture">
                          <img
                            src="https://image.flaticon.com/icons/svg/478/478543.svg"
                            alt=""
                            width="90"
                          />
                        </div>
                        <h2 class="card__title">Kiosk</h2>
                        <p className="conp">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Neque ipsum veritatis id quia cupiditate sed
                          architecto aliquam nostrum unde nam minima voluptas
                          dicta, beatae sint reprehenderit sit ducimus officiis
                          ratione?
                        </p>
                      </div>
                    </li>
                    {/* </Col> */}
                  </ul>
                  {/* </Row> */}
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseUpdated;
