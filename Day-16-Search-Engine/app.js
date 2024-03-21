const searchInput = document.getElementById("search");
const form = document.querySelector("form");
const holder = document.createElement("div");
holder.classList.add("holder");
const options = {
  headers: {Authorization: "Client-ID viAzAfoivZobXMdC197TdaT2qFhnKr2iLse4MnuuDPc"}
};
const makeGallery = (images) => {
  if(!images){
    alert("Ooppssie something went wrong");
    return;
  }
  holder.innerText = images.map(image => {
    `<div class="frame">
      <img src=${image.alt_description} id=${image.id} alt=${image.alt_description} title=${image.alt_description}/>
      <span>${image.alt_description}</span>
    </div>`
  }).join("");
  console.log(holder)
  document.body.append(holder)
};
const getImage = async (e) => {
  e.preventDefault();
  holder.innerHTML = null;
  const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchInput.value}`, options);
  const data = await response.json();
  makeGallery(data.results)
  searchInput.value="";
};
window.addEventListener("load", () => {
  form.addEventListener("submit", getImage);
});
