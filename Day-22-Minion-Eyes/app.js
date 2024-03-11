const minion = document.getElementById("minion");
let count = 0;
const triggerEyes = (e) => {
   if(e.clientX > e.clientY){
    count+=1;
    document.querySelectorAll(".eye-center").forEach(eye => {
        eye.style.left = `${count}px`;
    });
   }else{
    count-=1;
    document.querySelectorAll(".eye-center").forEach(eye => {
        eye.style.left = `${count}px`;
    });

   }
    
   
}
window.addEventListener("mousemove", (e) => triggerEyes(e));
