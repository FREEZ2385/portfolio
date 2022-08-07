// import gsap from "gsap";
import React from "react";
import projectData from "../../json/project.json";
import ProjectContent from "../organisms/projectContent";
import Carousel from "react-material-ui-carousel";
import { Paper, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "aos/dist/aos.css";

import "./scss/project.scss";

function Project() {
  return (
    <section className="project">
      <div
        className="project-carousel"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="project-title">Project</div>
        <hr />
        <Carousel
          fullHeightHover={false}
          NavButton={({ onClick, next, prev }) => {
            return (
              <IconButton
                size="small"
                onClick={onClick}
                className="carousel-navbutton"
              >
                {prev && (
                  <ArrowBackIosNewIcon
                    style={{
                      color: "#666666",
                      width: "3vmax",
                      height: "3vmax",
                    }}
                  />
                )}
                {next && (
                  <ArrowForwardIosIcon
                    style={{
                      color: "#666666",
                      width: "3vmax",
                      height: "3vmax",
                    }}
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
      </div>
    </section>
  );
}

export default Project;
