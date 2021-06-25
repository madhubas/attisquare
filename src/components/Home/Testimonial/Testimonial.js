import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./Testimonial.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <Swiper
        effect={"coverflow"}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 150,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
      >
        <SwiperSlide>
          <div className="test-content">
            <div className="test-text">
              <img
                className="test-img"
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt=""
              />
              <div className="test-text-box">
                <h3>Aravind </h3>
                <h6>Developer</h6>
              </div>
            </div>
            <div className="test-content-box">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                sequi alias soluta debitis voluptas ipsa deserunt accusantium,
                perspiciatis fugiat adipisci id maxime corrupti fuga possimus
                architecto ratione eligendi nisi veniam.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test-content">
            <div className="test-text">
              <img
                className="test-img"
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt=""
              />
              <div className="test-text-box">
                <h3>Aravind </h3>
                <h6>Developer</h6>
              </div>
            </div>
            <div className="test-content-box">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                sequi alias soluta debitis voluptas ipsa deserunt accusantium,
                perspiciatis fugiat adipisci id maxime corrupti fuga possimus
                architecto ratione eligendi nisi veniam.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test-content">
            <div className="test-text">
              <img
                className="test-img"
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt=""
              />
              <div className="test-text-box">
                <h3>Aravind </h3>
                <h6>Developer</h6>
              </div>
            </div>
            <div className="test-content-box">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                sequi alias soluta debitis voluptas ipsa deserunt accusantium,
                perspiciatis fugiat adipisci id maxime corrupti fuga possimus
                architecto ratione eligendi nisi veniam.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test-content">
            <div className="test-text">
              <img
                className="test-img"
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt=""
              />
              <div className="test-text-box">
                <h3>Aravind </h3>
                <h6>Developer</h6>
              </div>
            </div>
            <div className="test-content-box">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                sequi alias soluta debitis voluptas ipsa deserunt accusantium,
                perspiciatis fugiat adipisci id maxime corrupti fuga possimus
                architecto ratione eligendi nisi veniam.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test-content">
            <div className="test-text">
              <img
                className="test-img"
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt=""
              />
              <div className="test-text-box">
                <h3>Aravind </h3>
                <h6>Developer</h6>
              </div>
            </div>
            <div className="test-content-box">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                sequi alias soluta debitis voluptas ipsa deserunt accusantium,
                perspiciatis fugiat adipisci id maxime corrupti fuga possimus
                architecto ratione eligendi nisi veniam.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test-content">
            <div className="test-text">
              <img
                className="test-img"
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt=""
              />
              <div className="test-text-box">
                <h3>Aravind </h3>
                <h6>Developer</h6>
              </div>
            </div>
            <div className="test-content-box">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                sequi alias soluta debitis voluptas ipsa deserunt accusantium,
                perspiciatis fugiat adipisci id maxime corrupti fuga possimus
                architecto ratione eligendi nisi veniam.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
