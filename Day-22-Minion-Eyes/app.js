let pixelCounter = 0;
let threshold = {X: window.innerWidth / 2, Y: window.innerHeight / 2}
let eyes = document.querySelectorAll(".eye-center");
const setEyePosition = (targetEye, pixels, flag) => {
    if (flag) {
        targetEye.style.right = `${pixels}px`;
        targetEye.style.top = "0px";
    } else {
        targetEye.style.bottom = "0px";
        targetEye.style.top = `${pixels}px`;

    }
}
const triggerEyes = (e) => {
    let { clientX, clientY } = e;
    let isTopRegion = clientY < threshold.Y;
    if (isTopRegion) {
        clientX < threshold.X ?
            eyes.forEach(eye => {
                if (pixelCounter !== 30) {
                    pixelCounter += 1;
                    setEyePosition(eye, pixelCounter, isTopRegion);
                }
            }) : eyes.forEach(eye => {
                if (pixelCounter >= 0) {
                    pixelCounter -= 1;
                    setEyePosition(eye, pixelCounter, isTopRegion);
                }
            });
    } else {
      clientX > threshold.X ?
        eyes.forEach(eye => {
            if (pixelCounter !== 30) {
                pixelCounter += 1;
                setEyePosition(eye, pixelCounter, isTopRegion);
            }
        }) : eyes.forEach(eye => {
            if (pixelCounter >= 0) {
                pixelCounter -= 1;
                setEyePosition(eye, pixelCounter, isTopRegion);
            }
        });
    }
}
window.addEventListener("mousemove", (e) => triggerEyes(e));
