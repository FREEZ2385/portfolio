// import gsap from "gsap";
import React from "react";
import "aos/dist/aos.css";
import "./scss/aboutMe.scss";
import aboutMePicure from "../../images/aboutMe/introduce.jpeg";
import { Grid } from "@mui/material";
import aboutmeData from "../../json/aboutMe.json";

function AboutMe() {
  return (
    <section className="about-me">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="200"
        className="about-me-content-area"
      >
        <div className="about-me-picture-area">
          <div className="about-me-picture">
            <img
              src={aboutMePicure}
              style={{ maxHeight: "40vh", borderRadius: "3vmax" }}
            />
          </div>
          <div className="about-me-simple-introduce">
            <div className="introduce-name">About Me</div>
            <div className="introduce-nickname">Lee Freezを紹介します。</div>
            <div className="introduce-subtitle">
              <Grid container spacing={{ xs: 0.5, md: 1 }}>
                {aboutmeData.map((obj) => (
                  <>
                    <Grid item xs={3} className="introduce-subtitle-title">
                      {obj.title}
                    </Grid>
                    <Grid item xs={1} className="introduce-subtitle-title">
                      :
                    </Grid>
                    <Grid item xs={8} className="introduce-subtitle-content">
                      {obj.content}
                    </Grid>
                  </>
                ))}
              </Grid>
            </div>
          </div>
        </div>
        <div className="about-me-introduce-area">
          <div>
            こんにちは。Lee Sangcheol(イー・サンチョル)と申します。
            <br />
            日本に来てから3年目になってました。大学を卒業した後日本の生活を憧れて日本に行ってお仕事を始めました。
            大学から「Web
            UI」、「プログラミング」、「開発」に関するものを勉強して、この技術をもって日本の方と働いながら役になれるように頑張っています。
            日常に不便なものを私の技術内で作るのが好きです。新しいアプリを作るため、いつも新しいものを挑戦するのを好きなので新しい技術を探しに行くし、興味があったら独学でやってみます。
            いつかウェブアプリケーション以外にもAIに関しても軽く勉強してみたいです。
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
