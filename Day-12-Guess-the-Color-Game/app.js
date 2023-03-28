import { targetColor } from "./targetColor.js";
import { drawTable } from "./drawTable.js";
const targetColorDiv = document.querySelector(".targetColor");
const table = document.querySelector("#options");
const restColor = document.getElementById("restColor");
targetColorDiv.append(targetColor);

restColor.addEventListener("click", () => {
  window.location.reload();
});
window.addEventListener("load", () => {
  drawTable();
});
export { table };
