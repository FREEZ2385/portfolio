import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import React, { useEffect, useRef } from "react";
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
import Footer from "./components/templates/footer";
import Contact from "./components/templates/contact";

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

  const topRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  const mainNavbarItemList = [
    { title: "Top", ref: topRef },
    { title: "AboutMe", ref: aboutMeRef },
    { title: "Skill", ref: skillRef },
    { title: "Experience", ref: experienceRef },
    { title: "Project", ref: projectRef },
  ];

  return (
    <div className="App">
      <MainNavbar sectionList={mainNavbarItemList} />
      <Contact />
      <ScrollIcon />

      <div className="area">
        <div className="panel" ref={topRef}>
          <Introduce />
        </div>
        <div className="panel" ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div className="panel" ref={skillRef}>
          <Skill />
        </div>
        <div className="panel" ref={experienceRef}>
          <Experience />
        </div>
        <div className="panel" ref={projectRef}>
          <Project />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
