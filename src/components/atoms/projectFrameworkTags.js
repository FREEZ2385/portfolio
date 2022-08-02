import React from "react";
import "./scss/projectFrameworkTags.scss";
import PropTypes from "prop-types";

function ProjectFrameworkTags(props) {
  const { frameworkData } = props;

  return (
    <div className="project-framework-tags">
      <div className="project-framework-tags-title">使用したフレームワーク</div>
      <div className="project-framework-area">
        {frameworkData.map((tagData) => (
          <div key={tagData} className="framework-tag">
            {tagData}
          </div>
        ))}
      </div>
    </div>
  );
}

ProjectFrameworkTags.propTypes = {
  frameworkData: PropTypes.array,
};

ProjectFrameworkTags.defaultProps = {
  frameworkData: [],
};

export default ProjectFrameworkTags;
