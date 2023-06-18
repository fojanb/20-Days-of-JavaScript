const swapBtn = document.getElementById("swap-button");
const red = document.getElementById("red-color");
const green = document.getElementById("green-color");
const blue = document.getElementById("blue-color");
red.addEventListener("change", (e) => {
  let color = parseInt(e.target.value);
  if (color >= 0 && color <= 255) {
    console.log(color.toString(16));
  } else {
    alert("Each color must be between 0 and 255");
  }
});
export { swapBtn };
