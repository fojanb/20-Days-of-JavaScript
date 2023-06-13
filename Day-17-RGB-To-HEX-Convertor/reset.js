import { userInput } from "./userInput.js";
const resetBtn = document.getElementById("reset-button");
resetBtn.addEventListener("click", () => {
    userInput.value = "";
});
export { resetBtn };
