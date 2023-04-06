import { getLanguages } from "./languages.js";
import { detect } from "./detects.js";
const languages_menu = document.getElementById("languages");
const from_language_input = document.getElementById("user_input");
window.addEventListener("load", () => {
  getLanguages();
  detect();
});
export { languages_menu, from_language_input };
