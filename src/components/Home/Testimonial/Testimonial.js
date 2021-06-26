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
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
              <div className="test-text-box">
                <h3>Rengeswarar Ramadurai</h3>
                <h6>Local Guide</h6>
              </div>
            </div>
            <div className="test-content-box">
              <p>
                Around Chennai this one of the bestest place where you could get
                pocket friendly and delicious sharwarma with complimentary
                juice.Their dishes are limited but taste wise awesome. Here I
                recommend
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test-content">
            <div className="test-text">
              <img
                className="test-img"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
              <div className="test-text-box">
                <h3>Jaiganesh Godmaran </h3>
                <h6>Local Guide</h6>
              </div>
            </div>
            <div className="test-content-box">
              <p>
                Place for best reasonable Price of Shawarma,so Many varieties
                they Provide..its starts with 49rps/- And also they Giving
                juices
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test-content">
            <div className="test-text">
              <img
                className="test-img"
                src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                alt=""
              />
              <div className="test-text-box">
                <h3>Pratyush Sridhar </h3>
                <h6>Food Blogger</h6>
              </div>
            </div>
            <div className="test-content-box">
              <p>
                Very economical, fast and worth the money... Grill chicken was
                juicy and fresh... Shawarma was ok... Something in the mix
                wasn't right for me... Small cute place that packs a mighty
                punch... A few cool drinks would be a great addition to the
                space...
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
