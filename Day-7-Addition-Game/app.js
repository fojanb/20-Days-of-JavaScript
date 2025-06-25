const data = {
  num1: document.querySelector(".num1"),
  num2: document.querySelector(".num2"),
  displayResult: document.querySelector(".result"),
  btn: document.querySelector(".btn"),
  sum: 0,
};
const numberGenerator = () => {
  data.num1.innerText = Math.ceil(Math.random() * 10);
  data.num2.innerText = Math.ceil(Math.random() * 10);
};
const updateState = () => {
  data.displayResult.value = "";
  numberGenerator();
  add(data.num1, data.num2);
};
const checkAnswer = () => {
  if (!data.displayResult.value) {
    alert("You did not type any result yet...");
    return;
  }
  if (data.sum == parseInt(data.displayResult.value)) {
    alert("Correct!");
    updateState();
    return;
  } 
  alert(`Sorry, Incorrect. The correct answer was : ${data.sum}`);
  updateState();
}
const add = (n1, n2) => {
  data.sum = parseInt(n1.innerText) + parseInt(n2.innerText);
};
window.addEventListener("load", () => {
  updateState();
  data.btn.addEventListener("click",checkAnswer);
});
