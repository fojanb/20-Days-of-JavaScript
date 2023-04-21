import { API_KEY_1, API_KEY_2 } from "./myapikeys.js";
const searchInput = document.getElementById("search");
const searchButton = document.querySelector("button");
const holder = document.createElement("div");
holder.classList.add("holder")
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY_1,
    "X-RapidAPI-Host": API_KEY_2,
  },
};
const makeGallery = (images) => {
  images.forEach((image, index) => {
    const frame = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("span");
    title.innerText = image.title;
    frame.classList.add("frame");
    img.src = image.thumbnail;
    img.alt = image.title;
    img.setAttribute("id", index);
    frame.append(img,title);
    holder.append(frame);
    document.body.append(holder)
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

});
