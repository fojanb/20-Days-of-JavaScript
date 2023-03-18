import { data } from "./utils.js";
const tipFunction = () => {
  data.dropDownInput.addEventListener("change", (e) => {
    data.tip = parseInt(e.target.value);
  });
};
export default tipFunction;