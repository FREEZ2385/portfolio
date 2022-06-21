// import gsap from "gsap";
import React from "react";
import "./scss/introduce.scss";

function Introduce() {
  return (
    <section className="panel introduce">
      <div className="introduce-contents">
        <div className="introduce-title">Freez`s Laziness</div>
        <div className="introduce-subtitle">
          <span
            id="introduce-category"
            className="introduce-subtitle-category"
          ></span>
          <span className="introduce-subtitle-developer">Developer</span>
        </div>
      </div>
    </section>
  );
}

export default Introduce;
