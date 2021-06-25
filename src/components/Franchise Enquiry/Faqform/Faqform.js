import React from "react";
import "./Faqform.scss";

const Faqform = () => {
  return (
    <div class="wrapper">
      <form>
        <h2>OWN A FRANCHISE</h2>
        <h5>ENTER YOUR REQUEST FOR INITIAL MEETING</h5>
        <hr className="sep" />
        <div className="group">
          <input type="text" required="required" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>First Name</label>
        </div>
        <div className="group">
          <input type="text" required="required" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Last Name</label>
        </div>
        <div className="group">
          <input type="text" required="required" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Contact No.</label>
        </div>
        <div className="group">
          <input type="text" required="required" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Email</label>
        </div>
        <div className="group">
          <input type="text" required="required" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Intrested Country</label>
        </div>
        <div className="group">
          <textarea type="textarea" rows="5" required="required"></textarea>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Message</label>
        </div>
        <div className="group">
          <input
            type="checkbox"
            rows="5"
            required="required"
            value="Request a brochure for the interested market."
          ></input>
          {/* <span className="highlight"></span> */}
          {/* <span className="bar"></span> */}
          {/* <label>Request a brochure for the interested market.</label> */}
        </div>
        <div className="btn-box">
          <button className="btn btn-submit" type="submit">
            Send Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default Faqform;
