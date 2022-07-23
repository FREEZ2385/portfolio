import React from "react";
import "./scss/skillTags.scss";
import SkillTagsData from "../../json/skillTags.json";
import "aos/dist/aos.css";

function SkillTags() {
  return (
    <div className="skill-tags">
      {SkillTagsData.map((tagData) => (
        <div data-aos="zoom-in" key={tagData} className="skill-tag">
          {tagData}
        </div>
      ))}
    </div>
  );
}

export default SkillTags;
