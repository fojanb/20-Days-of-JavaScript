import { userInput } from "./userInput.js";
let hex,red_color,green_color,blue_color;
const red = document.getElementById("red-color");
const green = document.getElementById("green-color");
const blue = document.getElementById("blue-color");
const convertBtn = document.getElementById("convert-button");
convertBtn.addEventListener("click", () => {
    // Step-1-Convert the user's input string to the hex mode
    hex = userInput.value.toString(16);
    // Step-2-Extract red, green and blue from hex variable
    red.value = parseInt(hex.substring(0,2),16);
    green.value = parseInt(hex.substring(2,4),16);
    blue.value = parseInt(hex.substring(4,6),16);
});
export { hex,red_color,green_color,blue_color };
