const showRandomHexCode = document.querySelector("button");
const randomHexCodeHolder = document.querySelector("#hexCode");
const generateRandomHexCode = () => {
    let hexaDecimalNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let randomHexCode = [];
    let counter = 0;
    while (counter < 6) {
        let randomIndex = Math.floor(Math.random() * hexaDecimalNumbers.length);
        randomHexCode.push(hexaDecimalNumbers[randomIndex]);
        counter += 1;
    }
    randomHexCodeHolder.innerHTML = `
    <span style="background-color:#${randomHexCode.join("")};color:white;">
        #${randomHexCode.join("")}
    </span>`;
}
showRandomHexCode.addEventListener("click", generateRandomHexCode);
