import gsap from "gsap";

export default function IntroduceAnimation() {
  var introduceTimeLine = gsap.timeline();
  introduceTimeLine.fromTo(
    ".introduce-title",
    {
      y: "8vh",
      autoAlpha: 0,
    },
    {
      y: "0",
      autoAlpha: 1,
      duration: 1,
    }
  );
  introduceTimeLine.fromTo(
    ".introduce-subtitle",
    {
      y: "8vh",
      autoAlpha: 0,
    },
    {
      y: "0",
      autoAlpha: 1,
      duration: 1,
    }
  );
}
