const data = {
  add: document.querySelector("#add"),
  save : (e) => {
    e.preventDefault();
    const flashCard = document.createElement("div");
    flashCard.classList.add("flashCard");
    flashCard.textContent = "I am aquestion";
    document.querySelector(".flashCards").append(flashCard);
  },
};

const makeCard = () => {
  const newCard = document.createElement("form");
  newCard.classList.add("form");
  newCard.innerHTML = `
            <span>&times;</span>
            <lable for="question">Question</lable>
            <textarea id="question" style="height:100px;width: 90%;"></textarea>
            <lable for="answer">Answer</lable>
            <textarea id="answer" style="height:100px;width: 90%;"></textarea>
            <button id="save" style="width:30%;">Save</button>
        `;
  document.querySelector(".container").append(newCard);
  document.querySelector("#save").addEventListener("click", (e) => data.save(e));
};
data.add.addEventListener("click", makeCard);
