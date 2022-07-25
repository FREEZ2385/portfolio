// import gsap from "gsap";
import React from "react";
import projectData from "../../json/project.json";
import ProjectContent from "../organisms/projectContent";
import Carousel from "react-material-ui-carousel";
import { Paper, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./scss/project.scss";

function Project() {
  return (
    <section className="project">
      <Carousel
        fullHeightHover={false}
        NavButton={({ onClick, next, prev }) => {
          return (
            <IconButton size="small" onClick={onClick}>
              {prev && (
                <ArrowBackIosNewIcon
                  style={{ color: "#666666", width: "3vmax", height: "3vmax" }}
                />
              )}
              {next && (
                <ArrowForwardIosIcon
                  style={{ color: "#666666", width: "3vmax", height: "3vmax" }}
                />
              )}
            </IconButton>
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
