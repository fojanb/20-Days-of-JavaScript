import { API_KEY_1, API_KEY_2 } from "./myapikeys.js";
const search_bar = document.getElementById("search");
let card = document.createElement("div");
card.classList.add("card");
search_bar.addEventListener("change", async (e) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY_1,
      "X-RapidAPI-Host": API_KEY_2,
    },
  };

  let data = await fetch(
    `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${e.target.value}&pageNumber=1&pageSize=10&autoCorrect=true`,
    options
  ).then((response) => response.json());
  data.relatedSearch.forEach(item => {
    let place = document.createElement("div");
    place.innerHTML = item;
    document.body.append(place)
  })
  console.log(data);
});
