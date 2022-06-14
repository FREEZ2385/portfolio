import React from "react";
import "./scss/aboutMeArea.scss";
import PropTypes from "prop-types";

function AboutMeArea(props) {
  const { aboutMeData } = props;

  return (
    <div className="about-me-area">
      <h1>{aboutMeData.title}</h1>
      <h2>{aboutMeData.content}</h2>
    </div>
  );
}

AboutMeArea.propTypes = {
  aboutMeData: PropTypes.shape({
    code: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default AboutMeArea;
