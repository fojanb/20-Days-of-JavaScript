// const data = {
//   questions: [],
//   container: document.querySelector(".container"),
//   endPoint:"./questions.json",
// };
// const generateCard = (questions) => {
//   questions.forEach((question) => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.setAttribute("id", question.id);
//     card.innerHTML = `
//         <div class="question">${question.question}</div>
//         <ol>
//             <li><input type="checkbox"/>${question.opt_1}</li>
//             <li><input type="checkbox"/>${question.opt_2}</li>
//             <li><input type="checkbox"/>${question.opt_3}</li>
//             <li><input type="checkbox"/>${question.opt_4}</li>
//         </ol>
//         <button id="btn-${question.id}">Next Question</button>
//         `;
//       data.container.append(card);
//   });
// };
// const fetchQuestions = async () => {
//   const response = await fetch(data.endPoint);
//   data.questions = await response.json();
//   console.log(data.questions.questions);
//   generateCard(data.questions.questions);
// };

// window.addEventListener("load", fetchQuestions);
// ---------------No API and No json file----------------------------

const data = {
  current: "",
  prev: "",
  next: "",
  slides: document.querySelector(".slides"),
  prevBtn: document.querySelector(".goToPrev"),
  nextBtn: document.querySelector(".goToNext"),
};

const startSlider = () => {
  data.current = data.slides.querySelector(".current");
  data.prev =
    data.current.previousElementSibling || data.slides.lastElementChild;
  data.next = data.current.nextElementSibling || data.slides.firstElementChild;
  console.log({
    current: data.current,
    prev: data.prev,
    next: data.next,
  });
};
const applyClasses = () => {
  data.current.classList.add("current");
  data.prev.classList.add("prev");
  data.next.classList.add("next");
};
const move = (state) => {
  let classes = ["prev","current","next"];
  data.current.classList.remove(...classes);
  data.prev.classList.remove(...classes);
  data.next.classList.remove(...classes);
  if(state === "backward"){
    data.current = data.current.previousElementSibling.classList.add("current");
    data.prev = data.prev.previousElementSibling.classList.add("current")||slides.lastElementChild;
    data.next = data.current.nextElementSibling.classList.add("next");

  }else{
    data.current = data.current.nextElementSibling.classList.add("current");
    data.prev = data.current.previousElementSibling.classList.add("prev");
    data.next = data.current.nextElementSibling.classList.add("next");

  }
  applyClasses();

}
startSlider();
applyClasses();
data.prevBtn.addEventListener("click", () => move("backward"));
data.nextBtn.addEventListener("click", () => move("forward"));
