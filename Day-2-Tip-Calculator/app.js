import { data } from "./utils.js";
import billFunction from "./bill.js";
import personsFunction from "./persons.js";
import tipFunction from "./tip.js";
import calculateTip from "./calculate.js";
import reset from "./reset.js";

data.personsInput.addEventListener("focus", (e) => {
  e.target.parentNode.querySelector("i").style.display = "none";
});
let holder = document.createElement("div");


billFunction();
personsFunction();
tipFunction();
data.btn.addEventListener("click", (e) => calculateTip(e));
data.reset.addEventListener("click", reset);
export default holder;
