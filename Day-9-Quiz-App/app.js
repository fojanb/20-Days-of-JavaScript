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
const fetchQuestions = async () => {
  const response = await fetch("./questions.json");
  data.questions = await response.json();
  // console.log(data.questions.questions);
  data.questions.questions.forEach((question) => {
    const card = document.createElement("div");
    card.setAttribute("id", question.id);
    const showQuestion = (hide) => {
      card.classList.add("question", hide);
      card.innerHTML = `
      <div class="question-title">${question.question}</div>
      <div class="question-options">
          <div><input type="checkbox"></input>${question.opt_1}</div>
          <div><input type="checkbox"></input>${question.opt_2}</div>
          <div><input type="checkbox"></input>${question.opt_3}</div>
          <div><input type="checkbox"></input>${question.opt_4}</div>
      </div>
      <button id="btn-${question.id}">Next Question</button>
      `;
      data.container.append(card);
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

window.addEventListener("load", fetchQuestions);
