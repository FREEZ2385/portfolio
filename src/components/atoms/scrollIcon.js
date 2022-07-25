import React, { useEffect, useState } from "react";
import "./scss/scrollIcon.scss";

function ScrollIcon() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollX, window.scrollY);
      console.log(window.outerHeight);
      if (window.scrollY < window.outerHeight + 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);
  return (
    <div className={isVisible ? "scroll-icon" : "scroll-icon invisible"}>
      <div className="content">Scroll Please!</div>
      <div className="scroll"></div>
    </div>
  );
}

export default ScrollIcon;
