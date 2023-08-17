// Easy start : Game always will be start by user move (X)
const cells = document.querySelectorAll(".board .cell");
const resetBtn = document.querySelector("button[type='reset']");
const renderCells = (board) => {
  board.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      if (e.target.classList.contains("clicked")) {
        e.preventDefault();
      } else {
        e.target.classList.add("clicked");
        e.target.innerHTML = `<span style="font-weight:bold;font-size:40px;color:#fbbe24;font-family:Verdana;">X</span>`;
        if (e.target.id === "4") {
          let targ = [...board].filter((cell) => cell.id !== "4");
          let randomeCell = targ[Math.floor(Math.random() * targ.length)];
          randomeCell.classList.add("clicked");
          randomeCell.innerHTML = `<span style="font-size:40px;color:#fefefe;font-family:Verdana;">O</span>`;
        }else{
            [...board][4].classList.add("clicked");
            [...board][4].innerHTML = `<span style="font-size:40px;color:#fefefe;font-family:Verdana;">O</span>`;
        }
      }
    });
  });
};

resetBtn.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.innerHTML = "";
    cell.classList.remove("clicked");
  });
  renderCells(cells);
});
window.addEventListener("load", () => {
  renderCells(cells);
});
