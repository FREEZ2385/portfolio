// import gsap from "gsap";
import React from "react";
import projectData from "../../json/project.json";
import ProjectContent from "../organisms/projectContent";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

import "./scss/project.scss";

function Project() {
  return (
    <section className="project">
      <h1>Project</h1>
      <Carousel
        fullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
        NavButton={({ onClick, className, style, next, prev }) => {
          // Other logic

          return (
            <Button onClick={onClick} className={className} style={style}>
              {next && "Next"}
              {prev && "Previous"}
            </Button>
          );
        }}
      >
        {projectData.map((obj) => (
          <Paper key={obj.id} className="project-paper">
            <div>
              <ProjectContent projectContentData={obj} />
            </div>
          </Paper>
        ))}
      </Carousel>
    </section>
  );
}

export default Project;
