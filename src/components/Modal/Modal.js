import React from "react";
import "./Modal.css";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">KITCHEN STAFF</h4>
          {/* {props.title} */}
        </div>
        <div className="modal-body">
          <p>
            {/* {props.children} */}
            Experience: More than 1-year experience in Café/Hotel industry
            <br />
            • Prepare or serve hot or cold beverages, such as tea, coffee,
            espresso drinks, blended coffees etc.
            <br />
            • Clean or sanitize work areas, utensils, or equipment.
            <br />
            • Clean service or seating areas.
            <br />
            • Check temperatures of freezers, refrigerators, or heating
            equipment to ensure proper functioning.
            <br />
            • Describe menu items to customers or suggest products that might
            appeal to them.
            <br />
            • Order, receive, or stock supplies or retail products.
            <br />
            • Provide customers with product details, such as coffee blend or
            preparation descriptions.
            <br />
            • Adhere to Food Safety/sanitation policies and procedures
            established by the company.
            <br />
            • Receive and process customer payments.
            <br />
            • Stock customer service stations with paper products or beverage
            preparation items.
            <br />
            • Take customer orders and convey them to other employees for
            preparation.
            <br />
            • Take out garbage.
            <br />
            • Demonstrate the use of retail equipment, such as espresso
            machines.
            <br />
            • Wrap, label, or date food items for sale.
            <br />
            • Set up or restock product displays.
            <br />
            • Follow recipes to ensure food consistency.
            <br />
            • Keep work and dining areas clean, stocked and organized.
            <br />
            • Responsible for the Food & Beverage standards of serving customer.
            <br />
            • Does not leave the area of work without notifying the
            cashier/Outlet in charge.
            <br />
            • Perform all side duties established by the outlet in charge.
            <br />
            • To be familiar with food and menu terminology.
            <br />
            • To follow the company policies and procedures and all food and
            beverage standards.
            <br />
            • To ensure orders are thoroughly checked before serving to the
            guest.
            <br />
            • To perform all other related duties as requested.
            <br />
          </p>
        </div>
        <div className="modal-footer">
          <a href="#contact" onClick={props.onClose} className="apply">
            Apply
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
