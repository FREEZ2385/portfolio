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
      <div className="area">
        <Introduce />
        <AboutMe />
        <Skill />
      </div>
    </div>
  );
}

export default App;
