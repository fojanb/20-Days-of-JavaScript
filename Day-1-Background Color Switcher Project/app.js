const data = {
  circles: document.querySelectorAll("#circles div"),
  mainScreen: document.querySelector("html"),
};
const handleClick = (e) => {
  data.mainScreen.style.backgroundColor = e.target.style.backgroundColor;
};
const screenColor = () => {
  data.circles.forEach((circle) =>
    circle.addEventListener("click", handleClick)
  );
};
window.addEventListener("load", () => {
  screenColor();
});
