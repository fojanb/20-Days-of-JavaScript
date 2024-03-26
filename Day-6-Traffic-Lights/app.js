const trafficLightColors = {
  red: document.querySelector("#red"),
  yellow: document.querySelector("#yellow"),
  green: document.querySelector("#green"),
};
const startTrafficSignal = () => {
  trafficLightColors.green.classList.add("green");
  setTimeout(() => {
    trafficLightColors.green.classList.remove("green");
    trafficLightColors.red.classList.remove("red");
    trafficLightColors.yellow.classList.add("yellow");
  }, 1000);
  setTimeout(() => {
    trafficLightColors.green.classList.remove("green");
    trafficLightColors.red.classList.add("red");
    trafficLightColors.yellow.classList.remove("yellow");
  }, 2000);
  setTimeout(() => {
    trafficLightColors.green.classList.add("green");
    trafficLightColors.red.classList.remove("red");
    trafficLightColors.yellow.classList.remove("yellow");
  }, 3000);
};
var timer = setInterval(startTrafficSignal() , 3000);
startTrafficSignal();

