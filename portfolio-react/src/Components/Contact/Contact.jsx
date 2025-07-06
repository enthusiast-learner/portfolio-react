import React from "react";
import "../Contact/Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="img"></img>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently looking for a opportunity to work in an organinsation
            where i can enhance my skills.
          </p>
        </div>
        <div className="contact-details">
          <div className="contact-detail">
            <img src={mail_icon}></img>
            <p> shailashinde@gmail.com</p>
          </div>
          <div className="contact-detail">
            <img src={call_icon}></img>
            <p>+91 123456789</p>
          </div>
          <div className="contact-detail">
            <img src={location_icon}></img>
            <p>Pune, Maharashtra</p>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name"></input>
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
          ></input>
          <label htmlFor="">Write your message here</label>
          <textarea name="msg" rows="8" placeholder="Enter your message"></textarea>
          <button className="sontact-submit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
