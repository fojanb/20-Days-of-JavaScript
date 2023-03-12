import {data} from "./utils.js";
data.personsInput.addEventListener("focus", (e) => {
  e.target.parentNode.querySelector("i").style.display = "none";
});
let holder = document.createElement("div");
const billFunction = () => {
  data.billInput.addEventListener("change", (e) => {
    data.bill = parseInt(e.target.value);
  });
};
const personsFunction = () => {
  data.personsInput.addEventListener("change", (e) => {
    data.persons = parseInt(e.target.value);
  });
};
const tipFunction = () => {
  data.dropDownInput.addEventListener("change", (e) => {
    data.tip = parseInt(e.target.value);
  });
};
const calculateTip = (e) => {
  e.preventDefault();
  holder.setAttribute("id", "holder");
  holder.innerHTML = `Tip Amount is ${(data.bill * data.tip) / 100} $ </br>
  Total amount is ${(data.bill * data.tip) / 100 + data.bill} $ </br>
  Each person owes ${((data.bill * data.tip) / 100 + data.bill) / data.persons}
  `;
  document.querySelector(".container").append(holder);
};
const reset = () => {
  document.querySelectorAll("input").forEach((input) => (input.value = ""));
  holder.remove();
};
billFunction();
personsFunction();
tipFunction();
data.btn.addEventListener("click", (e) => calculateTip(e));
data.reset.addEventListener("click", reset);
