// ------ FORM ------//

// --- count characters left --- //

const question_Field = document.getElementById("questionField");
const countq = document.getElementById("characters-left-q");
question_Field.addEventListener("input", () => {
  const remainingCharsQ = 150 - question_Field.value.length;
  countq.textContent = remainingCharsQ;
});

const answer_Field = document.getElementById("answerField");
const counta = document.querySelector('[data-js="characters-left-a"]');
answer_Field.addEventListener("input", () => {
  const remainingCharsA = 150 - answer_Field.value.length;
  counta.textContent = remainingCharsA;
});

const forms = document.querySelectorAll('[data-js="new-card-container"]');
forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formElements = event.target.elements;
    const questionInput = formElements.questionField.value;
    const answerInput = formElements.answerField.value;
    const tagInput = formElements.tagField.value;
    
    // --- create a new card --- //
    const new_card_section = document.createElement("section");
    new_card_section.classList.add("cardContainer");

    const new_card_question = document.createElement("h2");
    new_card_question.textContent = questionInput;

    const new_card_button = document.createElement("button");
    new_card_button.classList.add("answerButton");
    new_card_button.textContent = "click to show answer";

    const new_card_answer = document.createElement("p");
    new_card_answer.classList.add("answerText");
    new_card_answer.setAttribute("hidden", "");
    new_card_answer.textContent = answerInput;

    new_card_button.addEventListener("click", () => {
      if (new_card_answer.hidden == true) {
        new_card_answer.removeAttribute("hidden");
        new_card_button.textContent = "click to hide answer";
      } else {
        new_card_answer.setAttribute("hidden", "");
        new_card_button.textContent = "click to show answer";
      }
    });

    const new_card_tagcotainer = document.createElement("div");
    new_card_tagcotainer.classList.add("tags");

    const new_card_tag = document.createElement("p");
    new_card_tag.classList.add("singletag");
    new_card_tag.textContent = tagInput;

    const new_card_bookmark = document.createElement("div");
    new_card_bookmark.classList.add("bookmarkContainer");

    const new_card_bookmark_button = document.createElement("button");
    new_card_bookmark_button.classList.add("bookmarkButton");

    new_card_bookmark_button.addEventListener("click", () => {
      new_card_bookmark_button.classList.toggle("bookmarkChecked");
    });

    // --- append the new card after the form --- //
    form.append(new_card_section);
    new_card_section.append(new_card_question);
    new_card_section.append(new_card_button);
    new_card_section.append(new_card_answer);
    new_card_section.append(new_card_tagcotainer);
    new_card_tagcotainer.append(new_card_tag);
    new_card_section.append(new_card_bookmark);
    new_card_bookmark.append(new_card_bookmark_button);

    formElements.questionField.focus();
    event.target.reset();
    countq.textContent = 150;
    counta.textContent = 150;
  });
});
