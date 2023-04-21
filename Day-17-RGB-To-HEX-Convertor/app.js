const hex = document.getElementById("input-hex");
const convert = document.getElementById("convert");
const reset = document.getElementById("reset");
convert.addEventListener("click", () => {
  console.log(hex.value);
});
reset.addEventListener("click", () => {
  hex.value = "";
});
