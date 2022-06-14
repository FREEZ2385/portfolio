import gsap from "gsap";
import aboutMeData from "../json/aboutMe.json";

export default function AboutMeAnimation() {
  var IntroduceTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-me",
      scrub: true,
      start: "top-=90% top",
      end: "bottom-=50% top",
      pinSpacing: true,
      id: "aaaaa",
    },
  });
  IntroduceTimeLine.from("#about-me-centerline", {
    height: "0vh",
    duration: 0,
  });
  IntroduceTimeLine.to("#about-me-centerline", {
    height: "100vh",
    duration: 2,
  });
  aboutMeData.map((object, index) =>
    gsap.fromTo(
      `#about-me-content-${object.code}`,
      {
        autoAlpha: 0,
        x: index % 2 === 0 ? "-50vw" : "50vw",
      },
      {
        scrollTrigger: {
          trigger: `.about-me`,
          markers: true,
          start: "top top+=10%",
        },
        autoAlpha: 1,
        x: "0vw",
        duration: 1,
      }
    )
  );
}
