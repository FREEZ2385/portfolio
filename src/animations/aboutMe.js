import gsap from "gsap";
import aboutMeData from "../json/aboutMe.json";

export default function AboutMeAnimation() {
  var IntroduceTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-me",
      // start: "top top",
      // end: "bottom+=100% top+=100%",
      id: "aaaaa",
    },
  });
  IntroduceTimeLine.to(".about-me", {
    backgroundColor: "#666666",
    duration: 0.4,
    overwrite: true,
  });
  aboutMeData.map((object) =>
    IntroduceTimeLine.fromTo(
      `#about-me-${object.code}`,
      { x: "-15vw", autoAlpha: 0 },
      {
        x: "0",
        autoAlpha: 1,
        duration: 0.3,
      }
    )
  );
}
