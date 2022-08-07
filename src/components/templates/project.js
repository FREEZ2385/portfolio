// import gsap from "gsap";
import React from "react";
import projectData from "../../json/project.json";
import ProjectContent from "../organisms/projectContent";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

import "aos/dist/aos.css";

import "./scss/project.scss";

function Project() {
  return (
    <section className="project">
      <div className="project-area" data-aos="fade-up" data-aos-duration="1000">
        <div className="project-title">Project</div>
        <hr />
        <div className="project-carousel">
          <Carousel fullHeightHover={false}>
            {projectData.map((obj) => (
              <Paper key={obj.id} className="project-paper">
                <div>
                  <ProjectContent projectContentData={obj} />
                </div>
              </Paper>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Project;
