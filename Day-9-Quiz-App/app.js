const fetchQuestions = async () => {
  const data = await fetch("./questions.json")
    .then((response) => response.json())
    .then((data) => console.log(data));

};

window.addEventListener("load", () => {
  fetchQuestions();
});
