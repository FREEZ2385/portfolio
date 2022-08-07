import { Grid } from "@mui/material";
import React from "react";
import CircularChart from "../atoms/circularChart";
import skillFrameworkData from "../../json/skillFramework.json";
import skillCloudData from "../../json/skillCloud.json";
import skillLanguageData from "../../json/skillLanguage.json";
import skillEtcData from "../../json/skillEtc.json";
import ProgressBarArea from "../atoms/progressBarArea";
import SkillTags from "../organisms/skillTags";
import { useMediaQuery } from "react-responsive";
import "./scss/skill.scss";
import "aos/dist/aos.css";

// image List
import awsIcon from "../../images/skill/aws.svg";
import azureIcon from "../../images/skill/azure.svg";
import dartIcon from "../../images/skill/dart.svg";
import djangoIcon from "../../images/skill/django.svg";
import flutterIcon from "../../images/skill/flutter.svg";
import javascriptIcon from "../../images/skill/javascript.svg";
import pythonIcon from "../../images/skill/python.svg";
import reactIcon from "../../images/skill/react.svg";
import pandasIcon from "../../images/skill/pandas.svg";

const iconObj = {
  aws: awsIcon,
  azure: azureIcon,
  dart: dartIcon,
  django: djangoIcon,
  flutter: flutterIcon,
  javascript: javascriptIcon,
  pandas: pandasIcon,
  python: pythonIcon,
  react: reactIcon,
};

function Skill() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 761px)",
  });

  return (
    <section className="skill">
      <div className="skill-area" data-aos="fade-up" data-aos-duration="1000">
        <div className="skill-title">Skill</div>

        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={isDesktop ? 4 : 12} className="skill-grid">
            <div className="skill-category-title"> Language </div>
            <hr />
            <Grid container spacing={1} justifyContent="left">
              {skillLanguageData.map((obj) => (
                <Grid key={obj.code} item xs={6} align="left">
                  <CircularChart
                    value={obj.value}
                    text={obj.title}
                    color="#FFD36E"
                    icon={iconObj[obj.code]}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={isDesktop ? 4 : 12} className="skill-grid">
            <div className="skill-category-title"> Framework </div>
            <hr />
            <Grid container spacing={1} justifyContent="left">
              {skillFrameworkData.map((obj) => (
                <Grid key={obj.code} item xs={6} align="left">
                  <CircularChart
                    value={obj.value}
                    text={obj.title}
                    color="#99FFCD"
                    icon={iconObj[obj.code]}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={isDesktop ? 4 : 12} className="skill-grid">
            <div className="skill-category-title"> Deployment </div>
            <hr />
            <Grid container spacing={1} justifyContent="left">
              {skillCloudData.map((obj) => (
                <Grid key={obj.code} item xs={6} align="left">
                  <CircularChart
                    value={obj.value}
                    text={obj.title}
                    color="#9FB4FF"
                    icon={iconObj[obj.code]}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={isDesktop ? 7 : 12}>
            <div className="skill-category-title"> Etc </div>
            <hr />
            {skillEtcData.map((obj) => (
              <ProgressBarArea
                key={obj.title}
                text={obj.title}
                value={obj.value}
                color={obj.color}
              />
            ))}
          </Grid>
          <Grid item xs={isDesktop ? 5 : 12}>
            <div className="skill-category-title"> Little Knowledge </div>
            <hr />
            <SkillTags />
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Skill;
