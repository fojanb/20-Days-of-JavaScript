import { userInput } from "./userInput.js";
import { red, green, blue, result, rgb_background_color } from "./convert.js";
const resetBtn = document.getElementById("reset-button");
resetBtn.addEventListener("click", () => {
  let input_values = [userInput, red, green, blue, result];
  input_values.forEach((input_value) => (input_value.value = ""));
  rgb_background_color.style.fill = "white";
});
export { resetBtn };
