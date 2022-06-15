// import gsap from "gsap";
import React from "react";
// import AboutMeArea from "../organisms/aboutMeArea";
import "./scss/aboutMe.scss";

function Skill() {
  return (
    <div
      className="skill"
      // style={{ height: `${(aboutMeData.length + 1) * 20}vh` }}
      style={{ height: `100vh` }}
    >
      <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 1200">
        <path
          className="theGreenLine"
          d="M -5,0
           Q 450 230 300 450 
           T 130 750
           Q 100 850 300 1000
           T 150 1200"
          fill="none"
          stroke="green"
          strokeWidth="10px"
        />
        <circle className="ball ball01" cx="25" cy="25"></circle>
      </svg>
    </div>
  );
}

export default Skill;
