import gsap from "gsap";
import React from "react";
import ExperienceContent from "../organisms/experienceContent";
import experienceData from "../../json/experience.json";
import ScrollTrigger from "gsap/ScrollTrigger";
import CheckIcon from "@mui/icons-material/Check";

import "aos/dist/aos.css";

import "./scss/experience.scss";

function Experience() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <section className="experience">
      <div className="experience-timeline" />
      {experienceData.map((obj) => (
        <div
          key={obj.id}
          id={`experience-card-${obj.id}`}
          data-aos="flip-up"
          className="experience-area"
        >
          <div className="experience-circle">
            <CheckIcon
              style={{ width: "3vmax", height: "3vmax", margin: "1vmax" }}
            />
          </div>
          <ExperienceContent experienceContentData={obj} />
        </div>
      ))}
    </section>
  );
}

export default Experience;
