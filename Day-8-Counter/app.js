const data = {
  sub: document.querySelector("#subtraction"),
  sum: document.querySelector("#summation"),
  counter: document.getElementById("counter"),
};
const counting = () => {
  data.sub.addEventListener("click", () => {
    let val = parseInt(data.counter.innerText) - 1;
    data.counter.innerText = val;
  });
};


counting();

