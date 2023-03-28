const targetColor = document.createElement("div");
targetColor.classList.add("targetColor");
const generateColor = () => {
  let rgb = [
    { red: Math.floor(Math.random() * 256) },
    { green: Math.floor(Math.random() * 256) },
    { blue: Math.floor(Math.random() * 256) },
  ];
  return `rgb(${rgb[0].red}, ${rgb[1].green}, ${rgb[2].blue})`;
};
targetColor.innerText = generateColor();
export { targetColor, generateColor };
