import gsap from "gsap";
import { Timeline } from "gsap/gsap-core";

const categoryList = ["FrontEnd", "BackEnd", "Web", "Mobile App"];

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
    ".introduce-subtitle-developer",
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
  var category = new Timeline({ repeat: -1 });
  category.startTime(1);
  categoryList.forEach((val) => {
    category.to("#introduce-category", {
      text: {
        value: val,
      },
      duration: 0.6,
      delay: 1,
      ease: "none",
    });
    category.to("#introduce-category", {
      text: {
        value: "",
      },
      duration: 0.6,
      delay: 1,
      ease: "none",
    });
  });
}
