// import gsap from "gsap";
import React from "react";
import AboutMeArea from "../organisms/aboutMeArea";
import "./scss/aboutMe.scss";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-contents">
        {/* TODO: Trello에 있는 레이아웃 구성 참고 */}
        <AboutMeArea />
      </div>
    </div>
  );
}

export default AboutMe;
