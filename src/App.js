import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import React, { useEffect } from "react";
import "./App.scss";
import AboutMe from "./components/templates/aboutMe";
import Introduce from "./components/templates/introduce";
import MainNavbar from "./components/templates/mainNavbar";
import PageAnimation from "./animations";
import ScrollIcon from "./components/atoms/scrollIcon";
import TextPlugin from "gsap/TextPlugin";
import Skill from "./components/templates/skill";
import Experience from "./components/templates/experience";
import Project from "./components/templates/project";

function goToPanel(panel) {
  gsap.to(window, {
    scrollTo: { y: panel, autoKill: false },
    duration: 1,
    ease: "power4.out",
  });
}

function App() {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  useEffect(() => {
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        end: "bottom top+=1",
        onEnter: () => goToPanel(panel),
        onEnterBack: () => goToPanel(panel),
      });
    });
    PageAnimation();
  });

  ScrollTrigger.addEventListener("scrollEnd", () => console.log("scrollEnd"));

  return (
    <div className="App">
      <MainNavbar />
      <ScrollIcon />

      <div className="area">
        <div className="panel">
          <Introduce />
        </div>
        <div className="panel">
          <AboutMe />
        </div>
        <div className="panel">
          <Skill />
        </div>
        <div className="panel">
          <Experience />
        </div>
        <div className="panel">
          <Project />
        </div>
      </div>
    </div>
  );
}

export default App;
