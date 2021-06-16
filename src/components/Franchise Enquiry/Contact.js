import "./Appcon.css";

function Contact() {
  return (
    <div id="contact-box">
      <div className="col">
        <span>
          <h2 id="contact-title">Franchise Enquiry</h2>
        </span>
        <form
          className="form"
          action="https://formsubmit.co/madhubas2k@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />

          <span id="fieldset">Fill in the form for franchise enquiries</span>
          <div className="form-main">
            <input type="text" placeholder="Name" id="name" name="name"></input>
            <br />
            <input
              type="text"
              placeholder="Email-id"
              id="left"
              name="email"
              required
            ></input>{" "}
            <br />
            <input
              type="text"
              placeholder="Phone No"
              id="left"
              name="phone"
              required
            ></input>{" "}
            <br />
            <input
              type="text"
              placeholder="City"
              id="left"
              name="city"
              required
            ></input>{" "}
            <br />
            <input
              type="text"
              placeholder="Pincode"
              id="left"
              name="pincode"
              required
            ></input>
            <input
              type="text"
              placeholder="Message"
              id="message"
              name="message"
              required
            ></input>
            <br />
            <input type="submit" className="but" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
