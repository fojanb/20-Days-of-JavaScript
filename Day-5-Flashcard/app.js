const data = {
  add: document.querySelector("#add"),
  newCard: document.createElement("form"),
  question:"",
  answer:"",
  save: (e,q,a,question,answer) => {
    e.preventDefault();
    const flashCard = document.createElement("div");
    if(q === "" ||a === ""){
      flashCard.classList.add("hide");
      alert("Please make sure that both answer and question are included.")
      return;
    }
    flashCard.classList.add("flashCard");
    flashCard.innerHTML = `<p>${q}</p><p>${a}</p>`;
    document.querySelector(".flashCards").append(flashCard);
    question.value="";
    answer.value="";
    data.question="";
    data.answer="";
  },
  close: (e) => {
    e.preventDefault();
    e.target.parentNode.classList.add("hide");
  },
};

const makeCard = () => {
  data.newCard.classList.remove("hide");
  data.newCard.classList.add("form");
  data.newCard.innerHTML = `
            <span id="close">&times;</span>
            <lable for="question">Question</lable>
            <textarea id="question" style="height:100px;width: 90%;" value=""></textarea>
            <lable for="answer">Answer</lable>
            <textarea id="answer" style="height:100px;width: 90%;" value=""></textarea>
            <button id="save" style="width:30%;">Save</button>
        `;
  document.querySelector(".container").append(data.newCard);
  const close = document.querySelector("#close");
  const question = document.querySelector("#question");
  const answer = document.querySelector("#answer");
  const save = document.querySelector("#save");
  close.addEventListener("click", (e) => data.close(e));
  question.addEventListener("change", (e) => data.question = e.target.value);
  answer.addEventListener("change", (e) => data.answer = e.target.value);
  save.addEventListener("click", (e) => data.save(e,data.question,data.answer,question,answer));
};
data.add.addEventListener("click", makeCard);
