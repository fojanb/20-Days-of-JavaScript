import { data } from "./utils.js";
import holder from "./app.js";
const calculateTip = (e) => {
  e.preventDefault();
  holder.setAttribute("id", "holder");
  holder.innerHTML = `Tip Amount is ${(data.bill * data.tip) / 100} $ </br>
    Total amount is ${(data.bill * data.tip) / 100 + data.bill} $ </br>
    Each person owes ${
      ((data.bill * data.tip) / 100 + data.bill) / data.persons
    }
    `;
  document.querySelector(".container").append(holder);
};
export default calculateTip;
