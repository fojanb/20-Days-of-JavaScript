import { userInput } from "./userInput.js";
import { red, green, blue, result, textarea } from "./hex_to_rgb.js";
const resetBtn = document.getElementById("reset-button");
resetBtn.addEventListener("click", () => {
  let input_values = [userInput, red, green, blue, result];
  input_values.forEach((input_value) => (input_value.value = ""));
  textarea.style.backgroundColor = "white";
});
export { resetBtn };
