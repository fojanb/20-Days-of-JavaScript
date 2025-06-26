import { clearErrorMessages } from "./clearErrorMessage.js";
import { assets } from "./app.js";
function reset() {
  assets.forEach((asset) => {
    asset.value = 0;
    document.getElementById(asset.id).value = "";
  });
  ["total", "dollarPerPerson"].forEach(
    (id) => (document.getElementById(id).textContent = "")
  );
  clearErrorMessages();
}
export { reset };
