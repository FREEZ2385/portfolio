// import gsap from "gsap";
import React from "react";
import "aos/dist/aos.css";
import "./scss/aboutMe.scss";
import aboutMePicure from "../../images/aboutMe/introduce.png";

function AboutMe() {
  return (
    <section className="about-me">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="200"
        className="about-me-content-area"
      >
        <div className="about-me-title">About Me</div>
        <div className="about-me-picture-area">
          <div className="about-me-picture">
            <img src={aboutMePicure} style={{ maxHeight: "40vh" }} />
          </div>
          <div className="about-me-simple-introduce">
            <div className="introduce-name">Lee Sangcheol</div>
            ３年目の韓国出身エンジニア
            <br />
          </div>
        </div>
        <div className="about-me-introduce-area">
          <div>Lee Sangcheol</div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
