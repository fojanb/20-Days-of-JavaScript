const colors = [
  { name: "purple", hex: "#cdb4db" },
  { name: "pink", hex: "#ffafcc" },
  { name: "blue", hex: "#a2d2ff" },
];
function handleColor(e) {
  const { backgroundColor } = e.target.style;
  document.body.style.backgroundColor = backgroundColor;
}
const colorsDOM = colors.map(
  (color) =>
    `<div class="circle" style="background-color:${color.hex}" onclick="handleColor(event)"></div>`
);
document.body.innerHTML = colorsDOM.join("");