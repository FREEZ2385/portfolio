import React from "react";
import "./scss/experienceContent.scss";
import PropTypes from "prop-types";

function ExperienceContent(props) {
  const { experienceContentData } = props;

  return (
    <div className="experience-content-area">
      <div className="experience-title-subtitle">
        <div className="experience-title">
          {experienceContentData.companyName}
        </div>
        <div className="experience-subtitle">
          ({experienceContentData.date.start} ~ {experienceContentData.date.end}
          )
        </div>
      </div>
      <hr />
      <div className="experience-content">
        {experienceContentData.content.map((contentText) => (
          <div key={contentText}>・{contentText}</div>
        ))}
      </div>
    </div>
  );
}

ExperienceContent.propTypes = {
  experienceContentData: PropTypes.shape({
    id: PropTypes.string,
    companyName: PropTypes.string,
    date: PropTypes.shape({ start: PropTypes.string, end: PropTypes.string }),
    content: PropTypes.array,
  }),
};

export default ExperienceContent;
