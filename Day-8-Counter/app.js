const data = {
  sub: document.querySelector("#subtraction"),
  sum: document.querySelector("#summation"),
  counter: document.getElementById("counter"),
};
const counting = (el, op) => {
  el.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "-":
        data.counter.innerText = parseInt(data.counter.innerText) - 1;
        break;
      case "+":
        data.counter.innerText = parseInt(data.counter.innerText) + 1;
        break;
    }
  });
};
counting(data.sub);
counting(data.sum);
