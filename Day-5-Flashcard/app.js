const data = {
  add: document.querySelector("#add"),
  form: document.createElement("form"),
  question: "",
  answer: "",
  questions: [],
  editedQuestion:"",
  index: 0,
};
const saveToLocalStorage = (assets) => {
  localStorage.setItem("data", JSON.stringify(assets));
};
const createFlashCard = (question) => {
  const flashCard = document.createElement("div");
  flashCard.classList.add("flashCard");
  flashCard.setAttribute("id", question.id);
  flashCard.innerHTML = `
      <div>${question.Q}</div>
      <div class="show">Show/Hide Answer</div>
      <div id="answer-${question.id}" class="answer">${question.A}</div>
      <div style="display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-top:10px;">
        <input id="delete-${question.id}" value="DELETE" type="button" class="delete"/>
        <input id="edit-${question.id}" value="EDIT" type="button" class="edit"/>
      </div>
      `;
  document.querySelector(".flashCards").append(flashCard);
  document
    .getElementById(`${question.id}`)
    .querySelector(".show")
    .addEventListener("click", () => {
      document
        .getElementById(`answer-${question.id}`)
        .classList.toggle("showAnswer");
    });
  document
    .getElementById(`edit-${question.id}`)
    .addEventListener("click", () => {
      document.getElementById(`${question.id}`).classList.add("hide");
      data.form.classList.remove("hide");

    });
  document
    .getElementById(`delete-${question.id}`)
    .addEventListener("click", () => {
      // Removing target queetion from the DOM:
      document.getElementById(`${question.id}`).remove();
      // We also remove it from the localStorage:
      saveToLocalStorage(
        data.questions.filter((que) => que.id !== question.id)
      );
    });
};
const saveBtn = (e, q, a, question, answer) => {
  e.preventDefault();
  if (question.value === "" || answer.value === "") {
    alert("Please provide both answer and question.");
  } else {
    data.questions.push({ Q: q, A: a, id: data.index });
    saveToLocalStorage(data.questions);
    createFlashCard({ Q: q, A: a, id: data.index });
    question.value = "";
    answer.value = "";
  }
  data.index = data.index + 1;
};
const closeBtn = (e) => {
  e.preventDefault();
  e.target.parentNode.classList.add("hide");
};
const makeCard = () => {
  data.form.classList.add("form", "hide");
  data.form.innerHTML = `
    <span id="close">&times;</span>
    <lable for="question">Question</lable>
    <textarea id="question" style="height:100px;width: 90%;" value=""></textarea>
    <lable for="answer">Answer</lable>
    <textarea id="answer" style="height:100px;width: 90%;" value=""></textarea>
    <button id="save" style="width:30%;">Save</button>
      `;
  document.querySelector(".container").append(data.form);
  const close = document.querySelector("#close");
  const question = document.querySelector("#question");
  const answer = document.querySelector("#answer");
  const save = document.querySelector("#save");
  close.addEventListener("click", (e) => closeBtn(e));
  question.addEventListener("change", (e) => (data.question = e.target.value));
  answer.addEventListener("change", (e) => (data.answer = e.target.value));
  save.addEventListener("click", (e) =>
    saveBtn(e, data.question, data.answer, question, answer)
  );
};
const fetchQuestions = () => {
  let currentQuestions = JSON.parse(localStorage.getItem("data"));
  if (!currentQuestions) {
    return;
  }
  data.questions.push(...currentQuestions);
  data.questions.forEach((question) => createFlashCard(question));
};
window.addEventListener("load", () => {
  makeCard();
  data.add.addEventListener("click", () => {
    data.form.classList.remove("hide");
  });
  fetchQuestions();
});
