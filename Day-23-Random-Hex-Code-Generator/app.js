const showRandomHexCode = document.querySelector("button");
const randomHexCodeHolder = document.querySelector("#hexCode");
const generateRandomHexCode = () => {
    let randomHexCode = Math.floor(Math.random() * 16777215).toString(16);
    randomHexCodeHolder.innerHTML = `
    <span style="background-color:#${randomHexCode};color:white;">
        #${randomHexCode}
    </span>`;
}
showRandomHexCode.addEventListener("click", generateRandomHexCode);
