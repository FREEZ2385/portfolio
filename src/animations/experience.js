// Useless
// import gsap from "gsap";
// import experienceData from "../json/experience.json";

// export default function ExperienceAnimation() {
//   var experienceTimeLine = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#panel-experience",
//       start: "top top",
//       end: "bottom-=20% top",
//       pin: true,
//       scrub: 0.2,
//       markers: true,
//     },
//   });

//   gsap.from(`#experience-card-${experienceData[0].id}`, {
//     y: "20vh",
//     x: "2vw",
//     alpha: 1,
//     zIndex: 3,
//   });
//   gsap.from(`#experience-card-${experienceData[1].id}`, {
//     width: "85vw",
//     height: "40vh",
//     alpha: 0.4,
//     zIndex: 1,
//   });

//   experienceData.map((object, index) => {
//     if (index > 0) {
//       experienceTimeLine
//         .to(
//           `#experience-card-${experienceData[index - 1].id}`,
//           1,
//           {
//             y: "-5vh",
//             x: 0,
//             width: "85vw",
//             height: "40vh",
//             alpha: 0.4,
//             zIndex: 1,
//             duration: 0.2,
//           },
//           0
//         )
//         .to(
//           `#experience-card-${experienceData[index].id}`,
//           1,
//           {
//             y: "-25vh",
//             x: "2vw",
//             width: "90vw",
//             height: "50vh",
//             alpha: 1,
//             zIndex: 3,
//             duration: 0.2,
//           },
//           0
//         );
//     }
//   });
// }
