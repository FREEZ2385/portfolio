import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/gsap-core";

export default function SkillAnimation() {
  var bezierData = MorphSVGPlugin.pathDataToBezier(".theGreenLine", {
    align: ".ball01",
  });
  var SkillTimeline = gsap.timeline();
  SkillTimeline.to(".ball01", 0.01, { autoAlpha: 1 })
    .from(".theGreenLine", 1, { drawSVG: 0 }, 0)
    .to(".ball01", 1, { bezier: { values: bezierData, type: "cubic" } }, 0);
}
