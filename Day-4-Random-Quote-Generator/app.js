const data = {
  baseURL: "https://api.quotable.io/random",
  btn: document.querySelector("button"),
  card: document.querySelector(".card"),
  message: document.createElement("div"),
};
const displaySpecificMessage = (msg) => {
  data.message.innerHTML = `<p style="border-left:2px solid #fff;padding:10px;">${msg}</p>`;
}
const displayError = (errorMessage) => {
  displaySpecificMessage(errorMessage);
  data.card.append(data.message);
}
const displayQuote = (targetQuote) => {
  if(targetQuote.statusCode){
    displayError(targetQuote.statusMessage);
    return;
  }
  data.message.setAttribute("id", targetQuote._id);
  data.message.innerHTML = `<p style="border-left:2px solid #fff;padding:10px;">"${targetQuote.content}"</p>
  <p style="text-align:right;">- ${targetQuote.author}</p>`;
  data.card.append(data.message);
}
const getQuote = async () => {
    displaySpecificMessage("Loading...");
    const res = await fetch(data.baseURL);
    const quote = await res.json();
    displayQuote(quote);
};
window.addEventListener("load", () => {
  data.btn.addEventListener("click", getQuote);
});

