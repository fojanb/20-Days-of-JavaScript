const data = {
  red: document.querySelector("#red"),
  yellow: document.querySelector("#yellow"),
  green: document.querySelector("#green"),
};
  setInterval(() => {
    data.red.classList.add("red");
  }, 1000);
  setInterval(() => {
    data.red.classList.add("off");
  }, 2000);
  setInterval(() => {
    data.yellow.classList.add("yellow");
  }, 2000);
  setInterval(() => {
    data.yellow.classList.add("off");
  }, 3000);
  setInterval(() => {
    data.green.classList.add("green");
  }, 3000);
  setInterval(() => {
    data.green.classList.add("off");
  }, 4000);
 

