import { generateColor } from "./targetColor.js";
import { table } from "./app.js";
const drawTable = () => {
  for (let index = 0; index < 3; index++) {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td><div style="background-color:${generateColor()};width:50px;height:50px;border-radius:50%;cursor:pointer;"></div></td>
        <td><div style="background-color:${generateColor()};width:50px;height:50px;border-radius:50%;cursor:pointer;"></div></td>
        <td><div style="background-color:${generateColor()};width:50px;height:50px;border-radius:50%;cursor:pointer;"></div></td>`;
    table.append(row);
  }
  document.querySelectorAll("td div").forEach((color) => {
    color.addEventListener("click", (e) => {
      console.log(e.target.style.backgroundColor);
    });
  });
};
export { drawTable };
