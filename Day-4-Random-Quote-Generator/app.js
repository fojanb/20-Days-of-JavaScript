const data = {
  url: "https://api.quotable.io/random",
  btn: document.querySelector("button"),
  quote: document.querySelector(".quote"),
};
let card = document.createElement("div");
let getQuote = async () => {
  const item = await fetch(data.url)
    .then((res) => res.json())
    .then((item) => item);
  // console.log(item);
  card.setAttribute("id", "quote");
  card.innerHTML = `<p style="border-left:2px solid #006f57;padding:10px;">"${item.content}"</p>
  <p style="text-align:right;">- ${item.author}</p>`;
  data.quote.append(card);
};
data.btn.addEventListener("click", getQuote);
