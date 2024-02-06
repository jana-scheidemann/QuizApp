const mainElement = document.querySelector("main");

const darkMode = document.querySelector('[data-js="dark-switch"]');
darkMode.addEventListener("click", () => {
  mainElement.classList.add("dark");
});
