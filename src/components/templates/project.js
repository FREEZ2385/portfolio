// import gsap from "gsap";
import React from "react";
import projectData from "../../json/project.json";
import ProjectContent from "../organisms/projectContent";

import "./scss/project.scss";

function Project() {
  return (
    <section className="project">
      <div className="project-area">
        <h1>Project</h1>
        {projectData.map((obj) => (
          <ProjectContent key={obj.id} projectContentData={obj} />
        ))}
      </div>
    </section>
  );
}

export default Project;
