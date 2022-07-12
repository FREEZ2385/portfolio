import gsap from "gsap";
import aboutMeData from "../json/aboutMe.json";

export default function AboutMeAnimation() {
  var IntroduceTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-me",
      start: "top-=100% top",
      end: "bottom-=50% top",
    },
  });
  IntroduceTimeLine.from("#about-me-centerline", {
    height: "0vh",
    duration: 0,
  });
  IntroduceTimeLine.to("#about-me-centerline", {
    height: "100vh",
    duration: 0.3,
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
          end: "bottom-=20%",
        },
        autoAlpha: 1,
        x: "0vw",
        duration: 1,
      }
    )
  );
}
