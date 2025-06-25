const searchInput = document.getElementById("search");
const form = document.querySelector("form");
const imagesHolder = document.createElement("div");
imagesHolder.classList.add("imagesHolder");
const options = {
  headers: { Authorization: `Client-ID ${YOUR_API_KEY}` }
};
const makeGallery = (images) => {
  if (!images) {
    alert("Something went wrong. Please try again.");
    return;
  }
  let renderedImages = images.map(image => {
    return `<div class="frame">
      <img src=${image.urls.regular} id=${image.id} alt=${image.alt_description} title=${image.alt_description}/>
      <span>${image.alt_description}</span>
    </div>`
  });
  imagesHolder.innerHTML = renderedImages.join("");
  document.querySelector(".wrapper").insertAdjacentElement("beforeend", imagesHolder)
};
const getImage = async (e) => {
  try {
    e.preventDefault();
    imagesHolder.innerHTML = "";
    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchInput.value}`, options);
    const data = await response.json();
    makeGallery(data.results)
    searchInput.value = "";
  } catch (error) {
    console.error(error)
  }
};
window.addEventListener("load", () => {
  form.addEventListener("submit", getImage);
});
