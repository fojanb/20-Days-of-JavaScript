import { generateColor } from "./targetColor.js";
import { table } from "./app.js";
import { targetColor } from "./targetColor.js";
let randomIndex = Math.floor(Math.random() * 10);
let colorArray = [];
const drawTable = () => {
  for (let index = 0; index < 10; index++) {
    colorArray.push(generateColor());
  }
  colorArray[randomIndex] = targetColor.innerText;
  colorArray.forEach((color, index) => {
    let circle = document.createElement("div");
    circle.setAttribute("id", `color-${index}`);
    circle.style.backgroundColor = color;
    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.borderRadius = "50%";
    circle.style.border = "1px solid gray";
    circle.style.cursor = "pointer";
    circle.style.margin = "10px"
    table.append(circle);
  });
  console.log(colorArray);
  document.querySelectorAll(`[id^="color-"]`).forEach((color) => {
    color.addEventListener("click", (e) => {
      if (e.target.style.backgroundColor === targetColor.innerText) {
        console.log("Yay! (^_^)");
      } else {
        console.log("Oops... (-_-)");
      }
    });
  });
};
export { drawTable };
