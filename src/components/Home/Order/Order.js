import { Button } from "react-bootstrap";
import React from "react";
import "./Order.css";

const Order = () => {
  return (
    <section>
      <div className="content-online">
        <div className="div-swiggy">
          <div className="div-text">
            <h3 style={{ color: "#000" }}>
              Order from <span className="zomato">Zomato</span>
            </h3>
            <Button className="button-zomato">Zomato</Button>
          </div>
        </div>
        <div className="div-swiggy">
          <div className="div-text">
            <h3 style={{ color: "#000" }}>
              Order from <span className="swiggy">Swiggy</span>
            </h3>
            <Button className="button-swiggy">Swiggy</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
