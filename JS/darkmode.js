// --- DARK MODE ---//
const main_element = document.querySelector("html");
const dark_mode = document.querySelector('[data-js="dark-switch"]');

dark_mode.addEventListener("click", () => {
  main_element.classList.toggle("dark");
});
