const data = {
  red: document.querySelector("#red"),
  yellow: document.querySelector("#yellow"),
  green: document.querySelector("#green"),
};
let repeat = 100;
  setInterval(() => {
    data.red.classList.add("red");
  }, 1000);
  setInterval(() => {
    data.red.classList.add("off");
  }, 2000);
  setInterval(() => {
    data.yellow.classList.add("yellow");
  }, 3000);
  setInterval(() => {
    data.yellow.classList.add("off");
  }, 4000);
  setInterval(() => {
    data.green.classList.add("green");
  }, 5000);
  setInterval(() => {
    data.green.classList.add("off");
  }, 6000);
 

