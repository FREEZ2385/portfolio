import React from "react";
import "./scss/aboutMeArea.scss";
import PropTypes from "prop-types";

function ExperenceContent(props) {
  const { experienceContentData } = props;

  return (
    <div>
      <div className="experience-title-subtitle">
        <h2>{experienceContentData.companyName}</h2>
        <h2>{experienceContentData.date}</h2>
      </div>
      <div className="experience-content">
        <h4>{experienceContentData.content}</h4>
      </div>
    </div>
  );
}

ExperenceContent.propTypes = {
  experienceContentData: PropTypes.shape({
    code: PropTypes.string,
    companyName: PropTypes.string,
    date: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default ExperenceContent;
