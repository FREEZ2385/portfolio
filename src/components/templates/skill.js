// import gsap from "gsap";
import React from "react";
import CircularChart from "../atoms/circularChart";
// import AboutMeArea from "../organisms/aboutMeArea";
import "./scss/skill.scss";

function Skill() {
  return (
    <section className="skill">
      <div className="skill-area">
        <h1>Skill</h1>
        <CircularChart value={95} text="testtt" />
        <CircularChart value={70} text="test2" />
        <CircularChart value={50} text="test3" />
      </div>
    </section>
  );
}

export default Skill;
