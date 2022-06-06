import React from "react";
import "./scss/aboutMeArea.scss";
import aboutMeData from "../../json/aboutMe.json";

function AboutMeArea() {
  return (
    <div className="about-me-area">
      {aboutMeData.map((object) => (
        <div
          key={object.code}
          id={`about-me-${object.code}`}
          className="about-me-area-content"
          style={{ height: `calc(${100 / aboutMeData.length}% - 20px)` }}
        >
          <h1>{object.title}</h1>
          <h2>{object.content}</h2>
        </div>
      ))}
    </div>
  );
}

export default AboutMeArea;
