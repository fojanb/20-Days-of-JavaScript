const data = {
  subtraction: document.querySelector("#subtraction"),
  summation: document.querySelector("#summation"),
  counter: document.getElementById("counter"),
};
const operations = [
  { name: data.subtraction, 
    accumulator: (a, b) => { return a - b }, 
    flag: (a) => { return a < 0 }, 
    color: "#9e2a2b" 
  },
  { name: data.summation, 
    accumulator: (a, b) => { return a + b }, 
    flag: (a) => { return a > 0 }, 
    color: "#006d77" 
  }
];
const checkForZero = (numberZero) => {
  if (parseInt(numberZero.innerText) == 0) {
    numberZero.style.color = "black";
  }
}
const countingLogic = (accumulator, flag, color) => {
  data.counter.innerText = accumulator(parseInt(data.counter.innerText), 1);
  checkForZero(data.counter);
  if (flag(parseInt(data.counter.innerText))) {
    data.counter.style.color = color;
  }
}
operations.forEach(operation => {
  const {name,accumulator,flag,color} = operation;
  name.addEventListener("click", () => countingLogic(accumulator,flag,color))
});