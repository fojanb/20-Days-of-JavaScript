const circles = document.querySelectorAll(".circle");
const changeScreenColor = (e) => {
  document.querySelector("html").style.backgroundColor = e.target.style.backgroundColor;
};
circles.forEach(circle => circle.addEventListener("click", changeScreenColor));
