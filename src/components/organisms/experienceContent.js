import React from "react";
import "./scss/aboutMeArea.scss";
import PropTypes from "prop-types";

function ExperenceContent(props) {
  const { experienceContentData } = props;

  return (
    <div>
      <div className="experience-title-subtitle">
        <h2>{experienceContentData.companyName}</h2>
        <h2>
          {experienceContentData.date.start} ~ {experienceContentData.date.end}
        </h2>
      </div>
      <div className="experience-content">
        {experienceContentData.content.map((contentText) => (
          <h4 key={contentText}>{contentText}</h4>
        ))}
      </div>
    </div>
  );
}

ExperenceContent.propTypes = {
  experienceContentData: PropTypes.shape({
    id: PropTypes.string,
    companyName: PropTypes.string,
    date: PropTypes.shape({ start: PropTypes.string, end: PropTypes.string }),
    content: PropTypes.array,
  }),
};

export default ExperenceContent;
