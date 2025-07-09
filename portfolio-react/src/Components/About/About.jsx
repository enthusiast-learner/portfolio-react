import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="aboutme"></img>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={about_profile} alt="profile-img"></img>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m Shaila Shinde, a Full Stack Developer from Ahmednagar, India,
              with a strong passion for Java and backend development.{" "}
            </p>
            <p>
              {" "}
              I enjoy designing scalable APIs and robust systems using Java and
              Spring Boot, while also building intuitive user interfaces with
              React. My love for Java drives me to write clean, maintainable,
              and efficient code.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Java</p><hr style={{width:"50%"}}></hr>
            </div>
            <div className="about-skill">
              <p>Spring Boot</p><hr style={{width:"50%"}}></hr>
            </div>
            <div className="about-skill">
              <p>Spring MVC</p><hr style={{width:"50%"}}></hr>
            </div>
            <div className="about-skill">
              <p>MySQL</p><hr style={{width:"50%"}}></hr>
            </div>
            <div className="about-skill">
              <p>REST APIs</p><hr style={{width:"50%"}}></hr>
            </div>
            <div className="about-skill">
              <p>React.js</p><hr style={{width:"50%"}}></hr>
            </div>
            <div className="about-skill">
              <p>JavaScript</p><hr style={{width:"50%"}}></hr>
            </div>
            <div className="about-skill">
              <p>Git & GitHub</p><hr style={{width:"50%"}}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div><hr></hr>
        <div className="about-achivement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div><hr></hr>
        <div className="about-achivement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
};

export default About;
