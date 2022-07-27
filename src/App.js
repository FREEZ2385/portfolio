import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
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

import ContactCopy from "./components/templates/contact_copy";

// function goToPanel(panel) {
//   gsap.to(window, {
//     scrollTo: { y: panel, autoKill: false },
//     duration: 1,
//     ease: "power4.out",
//   });
// }

function App() {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useEffect(() => {
    // const panels = document.querySelectorAll(".panel");
    // panels.forEach((panel) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     end: "bottom top+=1",
    //     onEnter: () => goToPanel(panel),
    //     onEnterBack: () => goToPanel(panel),
    //   });
    // });
    AOS.init();
    window.addEventListener("load", AOS.refresh());
    PageAnimation();
  });

  // ScrollTrigger.addEventListener("scrollEnd", () => console.log("scrollEnd"));

  const topRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  const mainNavbarItemList = [
    { title: "Top", id: "introduce", ref: topRef, isNear: true },
    { title: "AboutMe", id: "aboutMe", ref: aboutMeRef, isNear: false },
    { title: "Skill", id: "skill", ref: skillRef, isNear: false },
    {
      title: "Experience",
      id: "experience",
      ref: experienceRef,
      isNear: false,
    },
    { title: "Project", id: "project", ref: projectRef, isNear: false },
  ];

  return (
    <div className="App">
      <MainNavbar sectionList={mainNavbarItemList} />
      <ContactCopy />
      <ScrollIcon />

      <div className="area">
        <div id="panel-introduce" className="panel" ref={topRef}>
          <Introduce />
        </div>
        <div id="panel-aboutMe" className="panel" ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div id="panel-skill" className="panel" ref={skillRef}>
          <Skill />
        </div>
        <div id="panel-experience" className="panel" ref={experienceRef}>
          <Experience />
        </div>
        <div id="panel-project" className="panel" ref={projectRef}>
          <Project />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
