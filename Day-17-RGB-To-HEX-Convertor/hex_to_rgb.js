import { userInput } from "./userInput.js";
import { resetBtn } from "./reset.js";
let hex;
const red = document.getElementById("red-color");
const green = document.getElementById("green-color");
const blue = document.getElementById("blue-color");
const textarea = document.getElementById("result");
const result = document.getElementById("css-color");
const convertBtn = document.getElementById("convert-button");
convertBtn.addEventListener("click", (e) => {
  if (!userInput.value) {
    e.preventDefault();
    alert("Please Enter a Valid Hex Code.")
  } else {
    // Step-1-Convert the user's input string to the hex mode
    hex = userInput.value.toString(16);
    // Step-2-Extract red, green and blue from hex variable
    red.value = parseInt(hex.substring(0, 2), 16);
    green.value = parseInt(hex.substring(2, 4), 16);
    blue.value = parseInt(hex.substring(4, 6), 16);
    result.value = `rgb(${red.value},${green.value},${blue.value})`;
    textarea.style.backgroundColor = `#${hex}`;
  }
});
export { red, green, blue, result, textarea };
