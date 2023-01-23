const data = {
  questions: [],
  container: document.querySelector(".container"),
};
const nextBtn = (id) => {
  document.getElementById(`btn-${id}`).parentNode.classList.add("hidden");
  document
    .getElementById(`btn-${id}`)
    .parentNode.nextSibling.classList.remove("hidden");
};
const generateCard = (data) => {
  data.forEach((question) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.display = `${question.show}`
    card.setAttribute("id", question.id);
    const showQuestion = (hide) => {
      card.classList.add("question", hide);
      card.innerHTML = `
      <div class="question-title">${question.question}</div>
      <div class="question-options">
          <div><input id="opt-1-${question.id}" type="checkbox"></input>${question.opt_1}</div>
          <div><input id="opt-2-${question.id}" type="checkbox"></input>${question.opt_2}</div>
          <div><input id="opt-3-${question.id}" type="checkbox"></input>${question.opt_3}</div>
          <div><input id="opt-4-${question.id}" type="checkbox"></input>${question.opt_4}</div>
      </div>
      <button id="btn-${question.id}">Next Question</button>
      `;
      document
        .getElementById(`btn-${question.id}`)
        .addEventListener("click", () => nextBtn(question.id));
    };
    if (question.id == 0) {
      showQuestion(null);
      
    } else {
      showQuestion("hidden");
    }
  });
};
const fetchQuestions = async () => {
  const response = await fetch(`./questions.json`);
  data.questions = await response.json();
  // console.log(data.questions.questions);
  generateCard(data.questions.questions);
};

window.addEventListener("load", fetchQuestions)
