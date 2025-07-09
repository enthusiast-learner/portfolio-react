import React from "react";
import "../Contact/Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
// web3forms : search -> create your access key (which is send via email) -> choose react -> copy onSubmit fucntion and use the function
const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "74a2aa90-c347-45d4-a487-d506de180c61");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="img"></img>
      </div>
      <div className="contact-section"> 
        <div className="left-section">
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
        </div>
        <form onSubmit={onSubmit} className="contact-right">
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
          <button className="contact-submit" type="submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
