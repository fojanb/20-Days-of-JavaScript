import { data } from "./utils.js";
const personsFunction = () => {
  data.personsInput.addEventListener("change", (e) => {
    data.persons = parseInt(e.target.value);
  });
};
export default personsFunction;
