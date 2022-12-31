const data = {
  num1: document.querySelector(".num1"),
  num2: document.querySelector(".num2"),
  result: document.querySelector(".result"),
  btn: document.querySelector(".btn"),
  res: 0,
};
const randomNum = () => {
  data.num1.innerText = Math.ceil(Math.random() * 10);
  data.num2.innerText = Math.ceil(Math.random() * 10);
};
const checkAnswer = () => {
  data.btn.addEventListener("click", () => {
    if (data.res == data.result.value) {
      alert(`Your anwer is correct : ${data.result.value}`);
    } else {
      alert(`Sorry, incorrect. The correct answer was : ${data.res}`);
    }
  });
};
const result = (n1, n2) => {
  data.res = parseInt(n1.innerText) + parseInt(n2.innerText);
};

window.addEventListener("load", () => {
  randomNum();
  result(data.num1, data.num2);
  checkAnswer();
});
