import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id='hero' className="hero">
      <img src={profile_img} alt="profile-pic"></img>
      <h1><span>I'm Shaila Shinde,</span> FullStack developer based in India</h1>
      <p>
        I’m a passionate Full Stack Developer from Ahmednagar, India, skilled in
        building responsive and scalable web applications. I love solving
        real-world problems and continuously enhancing my skills in technologies
        like React, Spring Boot, MySQL, and more.
      </p>
      <div className="hero-action">

        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
