// import gsap from "gsap";
import React from "react";
// import AboutMeArea from "../organisms/aboutMeArea";
import "./scss/aboutMe.scss";
import aboutMeData from "../../json/aboutMe.json";

function AboutMe() {
  return (
    <div
      className="about-me"
      style={{ height: `${(aboutMeData.length + 1) * 30}vh` }}
    >
      <div id="about-me-centerline"></div>
      {aboutMeData.map((object, index) => (
        <div
          key={object.code}
          id={`about-me-content-${object.code}`}
          className={
            index % 2 === 0
              ? "about-me-left-contents"
              : "about-me-right-contents"
          }
          style={{ top: `${index * 10 - 86}vh` }}
        >
          {object.title}
        </div>
      ))}
    </div>
  );
}

export default AboutMe;
