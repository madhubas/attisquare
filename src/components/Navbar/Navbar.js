import React, { useEffect, useState } from "react";
import logo from "../Home/images/a2_logo-removebg-preview.png";
import "../Home/FirstSection.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [pos, setPos] = useState("top");

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 10) {
        setPos("moved");
      } else {
        setPos("top");
      }
    });
  }, []);

  var toggleMenu = () => {
    const menuToggle = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
  };

  // box-shadow: 1px 10px 58px -13px rgba(0, 0, 0, 0.75);
  // -webkit-box-shadow: 1px 10px 58px -13px rgba(0, 0, 0, 0.75);
  // -moz-box-shadow: 1px 10px 58px -13px rgba(0, 0, 0, 0.75);

  return (
    <div>
      <header
        style={{
          boxShadow:
            pos === "top" ? "none" : " 1px 10px 58px -13px rgba(0, 0, 0, 0.75)",
        }}
      >
        <Link to="/">
          <img src={logo} className="logo" alt="" />
        </Link>
        <div className="toggle" onClick={toggleMenu}></div>
        <ul className="navigation">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/franchise" onClick={toggleMenu}>
              Franchise
            </Link>
          </li>
          <li>
            <Link to="/franchise-enquiry" onClick={toggleMenu}>
              Franchise Enquiry
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={toggleMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact{" "}
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
