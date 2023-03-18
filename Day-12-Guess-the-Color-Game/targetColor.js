const targetColor = document.createElement("div");
targetColor.classList.add("targetColor");
const generateTargetColor = () => {
  let rgb = [
    { red: Math.floor(Math.random() * 256) },
    { green: Math.floor(Math.random() * 256) },
    { blue: Math.floor(Math.random() * 256) },
  ];
  targetColor.innerText = `rgb(${rgb[0].red},${rgb[1].green},${rgb[2].blue})`;
};
export { targetColor, generateTargetColor };
