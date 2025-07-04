import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="profile-pic"></img>
      <h1><span>I'm Shaila Shinde,</span> FullStack developer based in India</h1>
      <p>
        I’m a passionate Full Stack Developer from Ahmednagar, India, skilled in
        building responsive and scalable web applications. I love solving
        real-world problems and continuously enhancing my skills in technologies
        like React, Spring Boot, MySQL, and more.
      </p>
      <div className="hero-action">

        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
