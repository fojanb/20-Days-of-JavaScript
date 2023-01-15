const data = {
  questions: [],
  container: document.querySelector(".container"),
};
const generateCard = (questions) => {
  questions.forEach((question) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.display = `${question.show}`
    card.setAttribute("id", question.id);
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
  });
};
const fetchQuestions = async () => {
  const response = await fetch(`./questions.json`);
  data.questions = await response.json();
  // console.log(data.questions.questions);
  generateCard(data.questions.questions);
};

window.addEventListener("load", fetchQuestions);
