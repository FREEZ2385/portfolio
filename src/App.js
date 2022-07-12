import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import "./App.scss";
import AboutMe from "./components/templates/aboutMe";
import Introduce from "./components/templates/introduce";
import MainNavbar from "./components/templates/mainNavbar";
import PageAnimation from "./animations";
import ScrollIcon from "./components/atoms/scrollIcon";
import TextPlugin from "gsap/TextPlugin";
import Skill from "./components/templates/skill";
import ReactFullpage from "@fullpage/react-fullpage";
import Experience from "./components/templates/experience";
import Project from "./components/templates/project";

function App() {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    PageAnimation();
  });

  return (
    <div className="App">
      <MainNavbar />
      <ScrollIcon />
      <ReactFullpage
        navigation
        scrollBar
        scrollOverflow={false}
        render={() => {
          return (
            <div className="area">
              <div className="section">
                <Introduce />
              </div>
              <div className="section">
                <AboutMe />
              </div>
              <div className="section">
                <Skill />
              </div>
              <div className="section">
                <Experience />
              </div>
              <div className="section">
                <Project />
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
