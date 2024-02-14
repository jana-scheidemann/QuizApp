const mainElement = document.querySelector("html");
const cardElement = document.querySelector('[data-js="card-container"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const darkMode = document.querySelector('[data-js="dark-switch"]');
const answerButton = document.querySelector('[data-js="answerButton"]');
const answerText = document.querySelector('[data-js="hiddenAnswer"]');
const form = document.querySelector('[data-js="newCardForm"]');
const formButton = document.querySelector('[data-js="formSubmitButton"]');

darkMode.addEventListener("click", () => {
  mainElement.classList.toggle("dark");
});

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("active");
});

answerButton.addEventListener("click", () => {
  if (answerText.hidden === true) {
    answerText.removeAttribute("hidden");
  } else {
    answerText.setAttribute("hidden");
  }
});

form.addEventListener("submit", (event) => {});
event.preventDefault();

const formElements = event.target.elements;

const formData = new FormData(event.target);
const data = Object.fromEntries(formData);

const newCard = document.createElement();
