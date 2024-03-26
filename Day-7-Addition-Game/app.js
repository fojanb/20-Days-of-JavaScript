const data = {
  num1: document.querySelector(".num1"),
  num2: document.querySelector(".num2"),
  result: document.querySelector(".result"),
  btn: document.querySelector(".btn"),
  res: 0,
};
const numberGenerator = () => {
  data.num1.innerText = Math.ceil(Math.random() * 10);
  data.num2.innerText = Math.ceil(Math.random() * 10);
};
const updateState = () => {
  data.result.value = "";
  numberGenerator();
  result(data.num1, data.num2);
};
const checkAnswer = () => {
  if (!data.result.value) {
    alert("You did not type any result yet...");
    return;
  }
  if (data.res == parseInt(data.result.value)) {
    alert("Correct!");
    updateState();
    return;
  } 
  alert(`Sorry, Incorrect. The correct answer was : ${data.res}`);
  updateState();
  
}
const result = (n1, n2) => {
  data.res = parseInt(n1.innerText) + parseInt(n2.innerText);
};
window.addEventListener("load", () => {
  updateState();
  data.btn.addEventListener("click",checkAnswer);
});
