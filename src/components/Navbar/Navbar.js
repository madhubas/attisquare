import React from "react";
import logo from "./atti_logo_-removebg-preview.png";
import "../Home/FirstSection.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  var toggleMenu = () => {
    const menuToggle = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
  };

  return (
    <div>
      <header>
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
