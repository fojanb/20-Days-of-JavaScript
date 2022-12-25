const data = {
  add: document.querySelector("#add"),
  newCard: document.createElement("form"),
  question: "",
  answer: "",
  questions: [],
};
const saveToLocalStorage = () => {
  localStorage.setItem("data", JSON.stringify(data.questions));
};
const createFlashCard = (questions) => {
  questions.forEach(question => {
    const flashCard = document.createElement("div");
    flashCard.classList.add("flashCard");
    flashCard.innerHTML = `
      <p>${question.Q}</p><p class="showHide" style="color:blue;cursor:pointer;">Show/Hide Answer</p>`;
    document.querySelector(".flashCards").append(flashCard);
    document
      .querySelector(".showHide")
      .addEventListener(
        "click",
        (e) => (e.target.innerHTML = `<p style="color:whitesmoke;">${question.A}</p>`)
      );
  });

};
const saveBtn = (e, q, a, question, answer) => {
  e.preventDefault();
  data.questions.push({ Q: q, A: a });
  if (q === "" || a === "") {
    alert("Please provide both answer and question.");
  } else {
    saveToLocalStorage();
    createFlashCard(data.questions);
    // ---------------------
    question.value = "";
    answer.value = "";
  }
};
const closeBtn = (e) => {
  e.preventDefault();
  e.target.parentNode.classList.add("hide");
};
const makeCard = () => {
  data.newCard.classList.remove("hide");
  data.newCard.classList.add("form");
  data.newCard.innerHTML = `
    <span id="close">&times;</span>
    <lable for="question">Question</lable>
    <textarea id="question" style="height:100px;width: 90%;" value=""></textarea>
    <lable for="answer">Answer</lable>
    <textarea id="answer" style="height:100px;width: 90%;" value=""></textarea>
    <button id="save" style="width:30%;">Save</button>
      `;
  document.querySelector(".container").append(data.newCard);
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
  createFlashCard(data.questions)
  // console.log(data.questions);
};
window.addEventListener("load", () => {
  data.add.addEventListener("click", makeCard);
  fetchQuestions();
});
