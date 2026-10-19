document.addEventListener("DOMContentLoaded", function () {
  if (typeof particlesJS === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "polygon", polygon: { nb_sides: 5 } },
      opacity: { value: 0.4 },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.25, width: 1 },
      move: { enable: true, speed: 2, random: true, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: false }, onclick: { enable: false }, resize: true }
    },
    retina_detect: false
  });
});
