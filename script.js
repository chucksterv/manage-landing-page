const header = document.querySelector("header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.toggleAttribute("data-visible");
  header.toggleAttribute("data-overlay");
  nav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", true)
    : navToggle.setAttribute("aria-expanded", false);
});
