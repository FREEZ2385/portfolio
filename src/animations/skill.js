import gsap from "gsap";

export default function SkillAnimation() {
  var skillTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: ".skill",
      start: "top",
      end: "bottom",
      id: "skill",
    },
  });
  skillTimeLine.fromTo(
    "#progress",
    {
      width: 0,
      height: 0,
    },
    {
      width: 200,
      height: 200,
      ease: "elastic.out(1.3, 1)",
      duration: 0.7,
    }
  );
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
