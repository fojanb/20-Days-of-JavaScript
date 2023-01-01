const data = {
  question: document.querySelector(".question"),
  questions: [],
};
const fetchQuestions = async () => {
  const response = await fetch("./questions.json");
  data.questions = await response.json();
};

window.addEventListener("load", fetchQuestions());
