import React, { useState } from "react";
import "./Popup.css";
import image from "./atti shawarma kannai kavarum image.jpeg";

const Popup = () => {
  const [popup, setPopup] = useState(false);
  return (
    <div className="popup-container">
      <div className="popup-content">
        <img src={image} className="kannai-kavarum-atti-shwarama" />
      </div>
    </div>
  );
};

export default Popup;
