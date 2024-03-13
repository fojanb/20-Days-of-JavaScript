let pixelCounter = 0;
let threshold = {
    X: window.innerWidth / 2,
    Y: window.innerHeight / 2
}
let eyes = document.querySelectorAll(".eye-center");
const setEyePosition = (targetEye, pixels) => {
    targetEye.style.right = `${pixels}px`;
    targetEye.style.top = "0px";
}
const triggerEyes = (e) => {
    let { clientX, clientY } = e;
    let clientYlessThanThresholdY = clientY < threshold.Y;
    let clientYlessThanClientX = clientX > clientY;
    let topRegion = clientYlessThanClientX && clientYlessThanThresholdY;
    if (topRegion) {
        clientX < threshold.X ?
            eyes.forEach(eye => {
                if (pixelCounter !== 30) {
                    pixelCounter += 1;
                    setEyePosition(eye, pixelCounter);
                }
            }) : eyes.forEach(eye => {
                if (pixelCounter >= 0) {
                    pixelCounter -= 1;
                    setEyePosition(eye, pixelCounter);
                }
            });
    }
}
window.addEventListener("mousemove", (e) => triggerEyes(e));
