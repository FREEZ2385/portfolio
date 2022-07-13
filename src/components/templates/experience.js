// import gsap from "gsap";
import React from "react";
import ExperienceContent from "../organisms/experienceContent";
import experienceData from "../../json/experience.json";

import "./scss/experience.scss";

function Experience() {
  return (
    <section className="experience">
      <div className="experience-area">
        <h1>Experience</h1>
        {experienceData.map((obj) => (
          <ExperienceContent key={obj.id} experienceContentData={obj} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
