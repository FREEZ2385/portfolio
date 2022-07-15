import { Grid } from "@mui/material";
import React from "react";
import CircularChart from "../atoms/circularChart";
import skillFrameworkData from "../../json/skillFramework.json";
import skillCloudData from "../../json/skillCloud.json";
import skillLanguageData from "../../json/skillLanguage.json";
import skillEtcData from "../../json/skillEtc.json";
import ProgressBarArea from "../atoms/progressBarArea";
import SkillTags from "../organisms/skillTags";
import "./scss/skill.scss";
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
  return (
    <section className="skill">
      <div className="skill-area">
        <h1>Skill</h1>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={4}>
            <h1>Language</h1>
            <Grid container spacing={1} justifyContent="center">
              {skillLanguageData.map((obj) => (
                <Grid key={obj.code} item xs={6} align="center">
                  <CircularChart
                    value={obj.value}
                    text={obj.title}
                    icon={iconObj[obj.code]}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <h1>Framework</h1>
            <Grid container spacing={1} justifyContent="center">
              {skillFrameworkData.map((obj) => (
                <Grid key={obj.code} item xs={6} align="center">
                  <CircularChart
                    value={obj.value}
                    text={obj.title}
                    color="#000000"
                    icon={iconObj[obj.code]}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <h1>Cloud</h1>
            <Grid container spacing={1} justifyContent="center">
              {skillCloudData.map((obj) => (
                <Grid key={obj.code} item xs={6} align="center">
                  <CircularChart
                    value={obj.value}
                    text={obj.title}
                    color="#999999"
                    icon={iconObj[obj.code]}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={6} style={{ padding: "0px 40px" }}>
            <h1>Etc</h1>
            {skillEtcData.map((obj) => (
              <ProgressBarArea
                key={obj.title}
                text={obj.title}
                value={obj.value}
                color={obj.color}
              />
            ))}
          </Grid>
          <Grid item xs={6}>
            <h1>Little Knowledge</h1>
            <SkillTags />
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Skill;
