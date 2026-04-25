const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

let isOpen = false;

const tl = gsap.timeline({ paused: true });

tl.to("#mobileMenu", {
  x: 0,
  duration: 0.5,
  ease: "power3.out"
});

menuBtn.addEventListener("click", () => {
  if (!isOpen) {
    tl.play();
  } else {
    tl.reverse();
  }
  isOpen = !isOpen;
});