import gsap from "gsap";

export default function SkillAnimation() {
  var skillTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: ".skill",
    },
    defaults: { duration: 1, ease: "sine.inOut" },
    repeat: -1,
    yoyo: true,
    repeatDelay: 1,
  });

  skillTimeLine.set("circle", {
    drawSVG: 0,
    rotation: -90,
    transformOrigin: "center center",
  });

  skillTimeLine
    .fromTo("#target1", { drawSVG: "0" }, { drawSVG: "0 23" })
    .fromTo("#target2", { drawSVG: "23" }, { drawSVG: "23 56" }, 0)
    .fromTo("#target3", { drawSVG: "56" }, { drawSVG: "56 100" }, 0);
  // gsap
  //   .timeline({
  //     defaults: { duration: 1, ease: "sine.inOut" },
  //     repeat: -1,
  //     yoyo: true,
  //     repeatDelay: 1,
  //   })

  //   .to("#target1", { drawSVG: "0% 23%" })
  //   .to("#target2", { drawSVG: "23% 56%" }, 0)
  //   .to("#target3", { drawSVG: "56% 100%" }, 0);
}
