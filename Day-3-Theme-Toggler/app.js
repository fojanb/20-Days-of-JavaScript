const data = {
  modes: [document.querySelector("#moon"), document.querySelector("#sun")],
  toggler: () => {
    document.body.classList.toggle("sun");
  },
};
data.modes.forEach(mode => mode.addEventListener("click", data.toggler));
