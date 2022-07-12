// import gsap from "gsap";
import React from "react";

import "./scss/aboutMe.scss";
import aboutMeData from "../../json/aboutMe.json";
import AboutMeArea from "../organisms/aboutMeArea";

function AboutMe() {
  return (
    <section
      className="about-me"
      // style={{ height: `${(aboutMeData.length + 1) * 20}vh` }}
      style={{ height: `100vh` }}
    >
      <div id="about-me-centerline"></div>
      {aboutMeData.map((object, index) => (
        <div
          key={object.code}
          id={`about-me-content-${object.code}`}
          className={
            index % 2 === 0
              ? "about-me-left-contents"
              : "about-me-right-contents"
          }
          style={{
            top:
              index % 2 === 0
                ? `${index * 10 - 100}vh`
                : `${index * 10 - 90}vh`,
          }}
        >
          <AboutMeArea aboutMeData={object} />
        </div>
      ))}
    </section>
  );
}

export default AboutMe;
