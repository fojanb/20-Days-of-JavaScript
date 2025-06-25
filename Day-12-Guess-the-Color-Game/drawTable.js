import { generateColor } from "./targetColor.js";
import { table } from "./app.js";
import { targetColor } from "./targetColor.js";

let colorNumber = 10;
let randomIndex = Math.floor(Math.random() * 10);
let colorArray = [];

const generate_colors = () => {
  for (let index = 0; index < colorNumber; index++) {
    colorArray.push(generateColor());
  }
}

const generate_circle = () => {
  colorArray.forEach((color, index) => {
    let circle = document.createElement("div");
    circle.setAttribute("id", `color-${index}`);
    circle.style.backgroundColor = `${color}`;
    circle.classList.add("general");
    table.append(circle);
  });
}

const drawTable = () => {
  generate_colors();
  colorArray[randomIndex] = targetColor.innerText;
  generate_circle();
  document.querySelectorAll(`[id^="color-"]`).forEach(color => {
    color.addEventListener("click", (e) => {
      e.target.style.backgroundColor === targetColor.innerText ? alert("Yay! (^_^)") : alert("Oops... (-_-)");
    });
  });
};

export { drawTable };
