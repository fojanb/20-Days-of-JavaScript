const data = {
  sub: document.querySelector("#subtraction"),
  sum: document.querySelector("#summation"),
  counter: document.getElementById("counter"),
};
const counting = (op) => {
  op.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "sub":
        data.counter.innerText = parseInt(data.counter.innerText) - 1;
        if (parseInt(data.counter.innerText) == 0) {
          data.counter.style.color = "black";
        }
        if (parseInt(data.counter.innerText) < 0) {
          data.counter.style.color = "#9e2a2b";
        }
        break;
      case "sum":
        data.counter.innerText = parseInt(data.counter.innerText) + 1;
        if (parseInt(data.counter.innerText) == 0) {
          data.counter.style.color = "black";
        }
        if (parseInt(data.counter.innerText) > 0) {
          data.counter.style.color = "#006d77";
        }
        break;
    }
  });
};
counting(data.sub);
counting(data.sum);
