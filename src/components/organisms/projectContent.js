import React from "react";
import "./scss/aboutMeArea.scss";
import PropTypes from "prop-types";

function ProjectContent(props) {
  const { projectContentData } = props;

  return (
    <div>
      <div className="project-title-subtitle">
        <h2>{projectContentData.projectName}</h2>
        <h2>{projectContentData.url}</h2>
        <h2>{projectContentData.gitUrl}</h2>
      </div>
      {projectContentData.framework.map((framework) => (
        <h4 key={framework}>{framework}</h4>
      ))}
      <div className="project-content">{projectContentData.content}</div>
    </div>
  );
}

ProjectContent.propTypes = {
  projectContentData: PropTypes.shape({
    id: PropTypes.string,
    projectName: PropTypes.string,
    imagePath: PropTypes.string,
    url: PropTypes.string,
    gitUrl: PropTypes.string,
    framework: PropTypes.arrayOf(PropTypes.string),
    content: PropTypes.string,
  }),
};

export default ProjectContent;
