document.addEventListener("DOMContentLoaded", () => {
  // Estilos iniciales
  document.body.style.opacity = "0";
  document.body.style.transform = "scale(0.98)";
  document.body.style.filter = "blur(5px)";
  document.body.style.transition = "opacity 1s ease, transform 1s ease, filter 1s ease";

  // Cuando la página termine de cargar
  window.addEventListener("load", () => {
    document.body.style.opacity = "1";
    document.body.style.transform = "scale(1)";
    document.body.style.filter = "blur(0)";
  });
});
