// --- BOOKMARK BUTTON ---//
const card1 = document.querySelector('[data-js="card1"]');
const bookmark_button = card1.querySelector('[data-js="bookmark-button"]');

bookmark_button.addEventListener("click", () => {
  bookmark_button.classList.toggle("bookmarkChecked");
});

// --- ANSWER BUTTON ---//
const answer_button = document.querySelector('[data-js="answer-button"]');
const answer_text = document.querySelector('[data-js="answer-text"]');

answer_button.addEventListener("click", () => {
  if (answer_text.hidden === true) {
    answer_text.removeAttribute("hidden");
    answer_button.textContent = "click to hide answer";
  } else {
    answer_text.setAttribute("hidden", "");
    answer_button.textContent = "click to show answer";
  }
});
