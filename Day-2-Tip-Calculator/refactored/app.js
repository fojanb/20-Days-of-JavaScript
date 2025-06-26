import { reset } from "./reset.js";
import { clearErrorMessages } from "./clearErrorMessage.js";
// assets is state
let assets = [
  { id: "bill", value: 0 },
  { id: "tip", value: 0 },
  { id: "person", value: 0 },
];
let total,
  dollarPerPerson = 0;
let buttons = [
  { id: "calculate", action: calculate },
  { id: "reset", action: reset },
];

assets.forEach((asset, index) => getValue(asset.id, index));
buttons.forEach((button) =>
  document.getElementById(button.id).addEventListener("click", button.action)
);

function getValue(id, i) {
  document.getElementById(`${id}`).addEventListener("change", (e) => {
    assets[i].value = parseInt(e.target.value);
  });
}

function calculate() {
  if (assets[0].value > 1000) {
    document.getElementById("billErrorMessage").classList.remove("hidden");
    return;
  }
  if (assets[2].value === 0) {
    document.getElementById("personErrorMessage").classList.remove("hidden");
    return;
  }
  clearErrorMessages();
  total = assets[0].value + (assets[0].value * assets[1].value) / 100;
  dollarPerPerson = total / assets[2].value;
  document.getElementById("total").textContent = total;
  document.getElementById("dollarPerPerson").textContent = dollarPerPerson;
}

export { assets };
