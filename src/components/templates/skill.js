// import gsap from "gsap";
import gsap from "gsap";
import React from "react";
import CircularChart from "../atoms/circularChart";
// import AboutMeArea from "../organisms/aboutMeArea";
import "./scss/skill.scss";

function Skill() {
  const skillTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: ".skill-area",
      id: "skill",
    },
  });

  return (
    <section className="skill">
      <div className="skill-area">
        <h1>Skill</h1>
        <CircularChart
          value={95}
          text="testttaaaa"
          skillTimeLine={skillTimeLine}
        />
        <CircularChart
          value={70}
          text="test2aaa"
          skillTimeLine={skillTimeLine}
        />
        <CircularChart
          value={50}
          text="test3aaaaa"
          skillTimeLine={skillTimeLine}
        />
      </div>
    </section>
  );
}

export default Skill;
