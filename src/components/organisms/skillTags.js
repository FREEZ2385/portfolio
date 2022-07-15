import React from "react";
import "./scss/skillTags.scss";
import SkillTagsData from "../../json/skillTags.json";

function SkillTags() {
  return (
    <div className="skill-tags">
      {SkillTagsData.map((tagData) => (
        <div key={tagData} className="skill-tag">
          {tagData}
        </div>
      ))}
    </div>
  );
}

export default SkillTags;
