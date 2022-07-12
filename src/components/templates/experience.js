// import gsap from "gsap";
import React from "react";
import ExperienceContent from "../organisms/experienceContent";

import "./scss/experience.scss";

function Experience() {
  return (
    <section className="panel experience">
      <div className="experience-area">
        <h1>Experience</h1>

        <ExperienceContent
          experienceContentData={{
            code: "aaaaaa",
            companyName: "human resocia",
            date: "2019.04 - 2022.12",
            content: "test of experience content",
          }}
        />
      </div>
    </section>
  );
}

export default Experience;
