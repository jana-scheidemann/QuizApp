const mainElement = document.querySelector("html");
const cardElement = document.querySelector('[data-js="card-container"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const darkMode = document.querySelector('[data-js="dark-switch"]');
const answerButton = document.querySelector('[data-js="answerButton"]');
const answerText = document.querySelector('[data-js="hiddenAnswer"');

darkMode.addEventListener("click", () => {
  mainElement.classList.toggle("dark");
});

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("active");
});

answerButton.addEventListener("click", () => {
  if (answerText.hasAttribute("hidden")) {
    answerText.removeAttribute("hidden");
  } else {
    answerText.setAttribute("hidden", "");
  }
});
