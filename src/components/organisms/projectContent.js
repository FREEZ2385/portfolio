import React from "react";
import "./scss/projectContent.scss";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import ProjectFrameworkTags from "../atoms/projectFrameworkTags";
// image path import
import ffxivScreenShot from "../../images/project/ffxiv_screenshot.png";

function ProjectContent(props) {
  const { projectContentData } = props;

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project-content-area">
      <div className="project-title-subtitle">
        <div className="project-title">{projectContentData.projectName}</div>
        <Button
          className="link-button"
          onClick={() => {
            openInNewTab(projectContentData.url);
          }}
        >
          リンクへ
        </Button>
        <Button
          className="link-button"
          onClick={() => {
            openInNewTab(projectContentData.gitUrl);
          }}
        >
          GitHub
        </Button>
      </div>
      {projectContentData.isImage ? (
        <div className="image-area">
          <img
            src={ffxivScreenShot}
            style={{ maxWidth: "70vw", maxHeight: "40vh" }}
          />
        </div>
      ) : (
        <div className="empty-image"></div>
      )}

      <ProjectFrameworkTags frameworkData={projectContentData.framework} />
      <div className="project-content">{projectContentData.content}</div>
    </div>
  );
}

ProjectContent.propTypes = {
  projectContentData: PropTypes.shape({
    id: PropTypes.string,
    projectName: PropTypes.string,
    isImage: PropTypes.bool,
    url: PropTypes.string,
    gitUrl: PropTypes.string,
    framework: PropTypes.arrayOf(PropTypes.string),
    content: PropTypes.string,
  }),
};

export default ProjectContent;
