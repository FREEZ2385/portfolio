// import gsap from "gsap";
import React from "react";
import ExperienceContent from "../organisms/experienceContent";

import "./scss/project.scss";

function Project() {
  return (
    <section className="project">
      <div className="project-area">
        <h1>Project</h1>

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

export default Project;
