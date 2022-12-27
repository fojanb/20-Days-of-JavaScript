const data = {
  red: document.querySelector("#red"),
  yellow: document.querySelector("#yellow"),
  green: document.querySelector("#green"),
};
const startTrafficSignal = () => {
  data.green.classList.add("green");
  setTimeout(function () {
    data.green.classList.remove("green");
    data.red.classList.remove("red");
    data.yellow.classList.add("yellow");
  }, 1000);
  setTimeout(function () {
    data.green.classList.remove("green");
    data.red.classList.add("red");
    data.yellow.classList.remove("yellow");
  }, 2000);
  setTimeout(function () {
    data.green.classList.add("green");
    data.red.classList.remove("red");
    data.yellow.classList.remove("yellow");
  }, 3000);
};

var timer = setInterval(function () {
  startTrafficSignal();
}, 3000);

startTrafficSignal();
