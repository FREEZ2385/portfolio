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
  aboutMeData.map((object) =>
    gsap.fromTo(
      `#about-me-content-${object.code}`,
      {
        autoAlpha: 0,
      },
      {
        scrollTrigger: {
          trigger: `#about-me-content-${object.code}`,
          markers: true,
          start: "top+=600% bottom-=30%",
          end: "bottom+=600% bottom",
          scrub: true,
        },
        autoAlpha: 1,
        duration: 1,
      }
    )
  );
}
