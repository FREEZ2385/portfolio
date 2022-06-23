// import gsap from "gsap";
import React from "react";
// import AboutMeArea from "../organisms/aboutMeArea";
import "./scss/skill.scss";

function Skill() {
  return (
    <section className="skill">
      <div className="skill-area">
        <h1>Skill</h1>
        <div>
          <svg
            id="demo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            width="200"
            height="200"
          >
            <circle id="target1" r="200" stroke="#991a1a" cx="250" cy="250" />
            <circle id="target2" r="200" stroke="#307d40" cx="250" cy="250" />
            <circle id="target3" r="200" stroke="#304f7d" cx="250" cy="250" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Skill;
