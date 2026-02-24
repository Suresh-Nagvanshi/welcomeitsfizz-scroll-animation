gsap.registerPlugin(ScrollTrigger);

const car = document.getElementById("car");
const trail = document.getElementById("trail");
const letters = gsap.utils.toArray(".letter");
const stats = gsap.utils.toArray(".stat-box");

const road = document.querySelector(".road");
const roadWidth = road.offsetWidth;
const carWidth = 180;
const endX = roadWidth - carWidth;

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section",
    start: "top top",
    end: "+=200%",
    scrub: 1.2,
    pin: ".track",
    anticipatePin: 1
  }
});

/* Car movement */
tl.to(car, {
  x: endX,
  scale: 1.1,
  ease: "none"
}, 0);

/* Trail growth */
tl.to(trail, {
  width: endX + carWidth / 2,
  ease: "none"
}, 0);

/* Letter reveal */
letters.forEach((letter, i) => {
  tl.to(letter, {
    opacity: 1,
    y: 0,
    duration: 0.3
  }, i * 0.1);
});

/* Stats animation */
stats.forEach((box, i) => {
  tl.to(box, {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: "power2.out"
  }, 1 + i * 0.4);
});