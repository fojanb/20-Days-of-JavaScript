import { data } from "./utils.js";
const billFunction = () => {
  data.billInput.addEventListener("change", (e) => {
    data.bill = parseInt(e.target.value);
  });
};

export default billFunction;