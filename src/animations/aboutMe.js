import gsap from "gsap";

export default function AboutMeAnimation() {
  var IntroduceTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-me",
      scrub: true,
      pin: ".about-me",
      start: "top top",
      end: "bottom+=100% top+=100%",
      pinSpacing: true,
      id: "aaaaa",
    },
  });
  IntroduceTimeLine.from(".about-me-title", { x: "-15vw", autoAlpha: 0 }).to(
    ".about-me-title",
    {
      x: "0",
      autoAlpha: 1,
      duration: 2,
    }
  );
}
