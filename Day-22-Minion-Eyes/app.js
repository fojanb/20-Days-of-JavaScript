let pixelCounter = 0;
const triggerEyes = (e) => {
    if(e.clientX > e.clientY && e.clientX < window.innerWidth / 2 && e.clientY < window.innerHeight / 2) {
        console.log(pixelCounter)
        document.querySelectorAll(".eye-center").forEach(eye => {
            if (pixelCounter !== 30) {
                pixelCounter+=1;
                eye.style.right = `${pixelCounter}px`;
                eye.style.top = `0px`;
            }
        });
    }
    if(e.clientX > e.clientY && e.clientX > window.innerWidth / 2 && e.clientY < window.innerHeight / 2){
        console.log(pixelCounter)
        document.querySelectorAll(".eye-center").forEach(eye => {
            if (pixelCounter >= 0) {
                pixelCounter-=1;
                eye.style.right = `${pixelCounter}px`;
                eye.style.top = `0px`;
            }
        });
    }
  
}
window.addEventListener("mousemove", (e) => triggerEyes(e));
