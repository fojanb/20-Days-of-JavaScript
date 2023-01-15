const data = {
  questions: [],
  container: document.querySelector(".container"),
};
<<<<<<< HEAD
const generateCard = (questions) => {
  questions.forEach((question) => {
=======
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
>>>>>>> ca41eefaabc242b96fe8bbd26179042e62d44cdd
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.display = `${question.show}`
    card.setAttribute("id", question.id);
<<<<<<< HEAD
    card.innerHTML = `
        <div class="question">${question.question}</div>
        <ol>
            <li><input type="checkbox"/>${question.opt_1}</li>
            <li><input type="checkbox"/>${question.opt_2}</li>
            <li><input type="checkbox"/>${question.opt_3}</li>
            <li><input type="checkbox"/>${question.opt_4}</li>
        </ol>
        <button id="btn-${question.id}">Next Question</button>
        `;
    if(question.active){
      data.container.append(card);
    }
      
    
    document.getElementById(`btn-${question.id}`).addEventListener("click",() =>{
      document.getElementById(`${question.id}`).style.display = "none";
    });
=======
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
>>>>>>> ca41eefaabc242b96fe8bbd26179042e62d44cdd
  });
};
const fetchQuestions = async () => {
  const response = await fetch(`./questions.json`);
  data.questions = await response.json();
  // console.log(data.questions.questions);
  generateCard(data.questions.questions);
};

window.addEventListener("load", fetchQuestions);
