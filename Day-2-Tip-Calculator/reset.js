import holder from "./app.js";
const reset = () => {
  document.querySelectorAll("input").forEach((input) => (input.value = ""));
  holder.remove();
};
export default reset;
