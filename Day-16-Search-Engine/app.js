import { API_KEY_1, API_KEY_2 } from "./myapikeys.js";
<<<<<<< HEAD
const searchInput = document.getElementById("search");
const searchButton = document.querySelector("button");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY_1,
    "X-RapidAPI-Host": API_KEY_2,
  },
};
const makeGallery = (images) => {
  images.forEach((image, index) => {
    const frame = document.createElement("img");
    frame.src = image.thumbnail;
    frame.setAttribute("id", index);
    document.body.append(frame);
  });
};
const getImage = async () => {
  let data = await fetch(
    `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${searchInput.value}&pageNumber=1&pageSize=10&autoCorrect=true`,
    options
  ).then((response) => response.json());
  console.log(data.value);
  makeGallery(data.value);
};
window.addEventListener("load", () => {
  searchButton.addEventListener("click", getImage);
=======
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
>>>>>>> a78c9b31f49fd139eb0588daebeeb70b273ae33d
});
