import React from "react";
import "./scss/skillTags.scss";
import SkillTagsData from "../../json/skillTags.json";
import "aos/dist/aos.css";

function SkillTags() {
  return (
    <div
      data-aos="zoom-in"
      data-aos-once="true"
      data-aos-easing="ease-in-out-back"
      className="skill-tags"
    >
      {SkillTagsData.map((tagData) => (
        <div key={tagData} className="skill-tag">
          {tagData}
        </div>
      ))}
    </div>
  );
}

export default SkillTags;
