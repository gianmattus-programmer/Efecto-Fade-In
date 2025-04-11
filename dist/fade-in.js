document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1s ease-in-out";

  window.addEventListener("load", () => {
    document.body.style.opacity = 1;
  });
});
