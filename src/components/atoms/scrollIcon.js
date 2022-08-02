import React, { useEffect, useState } from "react";
import "./scss/scrollIcon.scss";

function ScrollIcon() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var body = document.body,
        html = document.documentElement;

      var height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      console.log(window.scrollX, window.scrollY);
      console.log(height);
      if (window.scrollY < height - 1200) {
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
