const red = document.getElementById("red-color");
const green = document.getElementById("green-color");
const blue = document.getElementById("blue-color");
const convert_btn = document.getElementById("convert-btn");
const reset_btn = document.getElementById("reset-btn");
let colors = [red, green, blue];
let result = [];
let converted;
colors.forEach((color) => {
  color.addEventListener("change", (e) => {
    let stringToNumber = parseInt(e.target.value);
    if (stringToNumber >= 0 && stringToNumber <= 255) {
      if (stringToNumber >= 0 && stringToNumber <= 15) {
        converted = `0${stringToNumber.toString(16)}`;
      } else {
        converted = `${stringToNumber.toString(16)}`;
      }
    } else {
      alert("Each color must be between 0 and 255");
      e.target.value = "";
    }
    switch (e.target.id) {
      case "red-color":
        result[0] = converted;
        break;
      case "green-color":
        result[1] = converted;
        break;
      case "blue-color":
        result[2] = converted;
        break;
    }
  });
});
convert_btn.addEventListener("click", (e) => {
  if (result.length<3) {
    e.preventDefault();
    alert("Please fill out all the fields to procced.");
  } else {
    document.getElementById("css-color-rgb").value = `#${result.join("")}`;
    document.getElementById("result-rgb").style.backgroundColor = `#${result.join("")}`;
  }
});
reset_btn.addEventListener("click",()=>{
  colors.forEach(color => color.value = "");
})
