// import gsap from "gsap";
import { Grid } from "@mui/material";
import React from "react";
import CircularChart from "../atoms/circularChart";
// import AboutMeArea from "../organisms/aboutMeArea";
import skillFrameworkData from "../../json/skillFramework.json";
import skillCloudData from "../../json/skillCloud.json";
import skillLanguageData from "../../json/skillLanguage.json";
import "./scss/skill.scss";

function Skill() {
  // const skillTimeLine = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".skill-area",
  //     id: "skill",
  //   },
  // });

  return (
    <section className="skill">
      <div className="skill-area">
        <h1>Skill</h1>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <h1>Language</h1>
            <Grid container spacing={1}>
              {skillLanguageData.map((obj) => (
                <Grid key={obj.code} item xs={6}>
                  <CircularChart value={obj.value} text={obj.title} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <h1>Framework</h1>
            <Grid container spacing={1}>
              {skillFrameworkData.map((obj) => (
                <Grid key={obj.code} item xs={6}>
                  <CircularChart
                    value={obj.value}
                    text={obj.title}
                    color="#000000"
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <h1>Cloud</h1>
            <Grid container spacing={1}>
              {skillCloudData.map((obj) => (
                <Grid key={obj.code} item xs={6}>
                  <CircularChart
                    value={obj.value}
                    text={obj.title}
                    color="#999999"
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Skill;
