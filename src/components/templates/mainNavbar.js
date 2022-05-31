import gsap from "gsap";
import React, { useEffect, useState } from "react";
import NavbarMenuItem from "../atoms/navbarMenuItem";
import "./scss/mainNavbar.scss";

function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    gsap.fromTo(
      ".nav-bar",
      { x: 0, duration: 0.5 },
      { x: "19vw", duration: 0.8 }
    );
    setIsOpen(true);
  };

  const handleOpen = () => {
    gsap.fromTo(
      ".nav-bar",
      { x: "20vw", duration: 0.5 },
      { x: 0, duration: 0.8 }
    );
    setIsOpen(false);
    setTimeout(() => handleClose(), 5000);
  };

  useEffect(() => {
    if (isOpen)
      gsap.fromTo(
        ".nav-bar-menu",
        { y: "5vh", duration: 0.5, opacity: 0, ease: "power4.out" },
        { y: 0, duration: 1.5, opacity: 1, ease: "power4.out" }
      );
  });
  return (
    <div className="nav-bar">
      <div className="nav-bar-area">
        <div className="nav-bar-title">Freez`s Laziness</div>
        <div className="nav-bar-menu">
          <NavbarMenuItem title="Home" />
          <NavbarMenuItem title="About Me" />
          <NavbarMenuItem title="Project" />
        </div>
      </div>
      <div
        className="nav-bar-open-button"
        onClick={() => {
          console.log(isOpen);
          if (isOpen) {
            handleOpen();
          } else {
            handleClose();
          }
        }}
      >
        open
      </div>
    </div>
  );
}

export default MainNavbar;
