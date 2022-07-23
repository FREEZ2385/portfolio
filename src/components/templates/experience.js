import gsap from "gsap";
import React from "react";
import ExperienceContent from "../organisms/experienceContent";
import experienceData from "../../json/experience.json";
import ScrollTrigger from "gsap/ScrollTrigger";

import "aos/dist/aos.css";

import "./scss/experience.scss";

function Experience() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <section className="experience">
      {experienceData.map((obj) => (
        <div
          key={obj.id}
          id={`experience-card-${obj.id}`}
          data-aos="flip-up"
          className="experience-area"
        >
          <ExperienceContent experienceContentData={obj} />
        </div>
      ))}
    </section>
  );
}

export default Experience;
