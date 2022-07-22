import gsap from "gsap";
import React, { useEffect } from "react";
import ExperienceContent from "../organisms/experienceContent";
import experienceData from "../../json/experience.json";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./scss/experience.scss";

function Experience() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    // gsap.set(".experience-area", { yPercent: 400, opacity: 0, scale: 0 });
    // const cards = gsap.utils.toArray(".experience-area");
  }, []);

  return (
    <section className="experience">
      {experienceData.map((obj) => (
        <div
          key={obj.id}
          id={`experience-card-${obj.id}`}
          className="experience-area"
        >
          <ExperienceContent experienceContentData={obj} />
        </div>
      ))}
    </section>
  );
}

export default Experience;
