// --- FORM ---//
const forms = document.querySelectorAll('[data-js="new-card-container"]');
const form_button = document.querySelector('[data-js="form-submit-button"]');
forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formElements = event.target.elements;
    const questionInput = formElements.questionField.value;
    const answerInput = formElements.answerField.value;
    const tagInput = formElements.tagField.value;
    //   const formData = new FormData(event.target);
    //   const data = Object.fromEntries(formData);

    const new_card_section = document.createElement("section");
    new_card_section.classList.add("cardContainer");
    const new_card_question = document.createElement("h2");
    new_card_question.textContent = questionInput;
    const new_card_button = document.createElement("button");
    new_card_button.classList.add("answerButton");
    const new_card_answer = document.createElement("p");
    new_card_answer.classList.add("answerText");
    new_card_answer.textContent = answerInput;
    const new_card_tag = document.createElement("p");
    new_card_tag.classList.add("singletag");
    new_card_tag.textContent = tagInput;
    const new_card_bookmark = document.createElement("div");
    new_card_bookmark.classList.add("bookmarkContainer");
    const new_card_bookmark_button = document.createElement("button");
    new_card_bookmark_button.classList.add("bookmarkButton");

    form.append(new_card_section);
    new_card_section.append(new_card_question);
    new_card_section.append(new_card_button);
    new_card_section.append(new_card_answer);
    new_card_section.append(new_card_tag);
    new_card_section.append(new_card_bookmark);
    new_card_bookmark.append(new_card_bookmark_button);

    new_card_bookmark_button.addEventListener("click", () => {
      new_card_bookmark_button.classList.toggle("bookmarkChecked");
    });
  });
});
