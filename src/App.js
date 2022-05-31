import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import "./App.scss";
import AboutMe from "./components/templates/aboutMe";
import Introduce from "./components/templates/introduce";
import MainNavbar from "./components/templates/mainNavbar";
import PageAnimation from "./animations";
import ScrollIcon from "./components/atoms/scrollIcon";

function App() {
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
      </div>
    </div>
  );
}

export default App;
