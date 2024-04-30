// --- BOOKMARK BUTTON ---//
const bookmark_buttons = document.querySelectorAll(
  '[data-js="bookmark-buttons"]'
);

bookmark_buttons.forEach((bookmark_button) => {
  bookmark_button.addEventListener("click", () => {
    bookmark_button.classList.toggle("bookmarkChecked");
  });
});

// --- ANSWER BUTTON ---//
const answer_buttons = document.querySelectorAll('[data-js="answer-button"]');
const answer_text = document.querySelectorAll('[data-js="answer-text"]');
answer_buttons.forEach((answer_button, index) => {
  answer_button.addEventListener("click", () => {
    if (answer_text[index].hidden === true) {
      answer_text[index].removeAttribute("hidden");
      answer_button.textContent = "click to hide answer";
    } else {
      answer_text[index].setAttribute("hidden", "");
      answer_button.textContent = "click to show answer";
    }
  });
});

//--- DARK MODE ---//
const html_element = document.querySelector("html");
const dark_mode = document.querySelector('[data-js="dark-switch"]');

dark_mode.addEventListener("click", () => {
  html_element.classList.toggle("dark");
});
