const data = {
  questions: [],
  container: document.querySelector(".container"),
};
const fetchQuestions = async () => {
  const response = await fetch("./questions.json");
  data.questions = await response.json();
  // console.log(data.questions.questions);
  data.questions.questions.forEach((question) => {
    const card = document.createElement("div");
    card.setAttribute("id", question.id);
    card.innerHTML = `
        <div class="question">${question.question}</div>
        <ol>
            <li>${question.opt_1}</li>
            <li>${question.opt_2}</li>
            <li>${question.opt_3}</li>
            <li>${question.opt_4}</li>
        </ol>
        <button id="btn-${question.id}">Next Question</button>

        `;
    data.container.append(card);
  });
};
window.addEventListener("load", fetchQuestions);
