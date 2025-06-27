const hamburgerButton = document.querySelector(
  '[aria-controls="primary-navigation"]'
);
const nav = document.querySelector(".primary-navigation");

hamburgerButton.addEventListener("click", () => {
  const isNavOpened = hamburgerButton.getAttribute("aria-expanded");

  if (isNavOpened === "false") {
    hamburgerButton.setAttribute("aria-expanded", "true");
  } else {
    hamburgerButton.setAttribute("aria-expanded", "false");
  }
});

const resizeObserver = new ResizeObserver((entries) => {
  document.body.classList.add("resizing");

  requestAnimationFrame(() => {
    document.body.classList.remove("resizing");
  });
});
resizeObserver.observe(document.body);

const heroSection = document.querySelector("#hero");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      hamburgerButton.setAttribute("aria-expanded", "false");
    }
  });
});

observer.observe(heroSection);
