import React, { useState, useEffect } from "react";
import "./Popup.css";

const Popup = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);

  const closePopup = () => {
    setShow(false);
  };
  return (
    <div
      id="popupMain"
      style={{ display: `${show === true ? "block" : "none"}` }}
    >
      <div id="popup">
        <img
          src="https://drive.google.com/uc?export=view&id=1v1ywfFwS7i88eWr95cK-NmW-Jechiygx"
          alt="popup"
        />
        <button id="submitId" onClick={closePopup}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Popup;
