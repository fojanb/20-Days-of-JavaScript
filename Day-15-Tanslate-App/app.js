import {API_KEY_1 , API_KEY_2} from "./myapikeys.js"
const languages_menu = document.getElementById("languages");
const options = {
  method: "GET",
  headers: {
    "Accept-Encoding": "application/gzip",
    "X-RapidAPI-Key": API_KEY_1,
    "X-RapidAPI-Host": API_KEY_2,
  },
};

const getLanguages = async () => {
  let data = await fetch(
    "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
    options
  ).then((response) => response.json());
  data.data.languages.forEach((language,index) => {
    let option = document.createElement("option");
    option.setAttribute("id",index);
    option.innerText = language.language;
    languages_menu.append(option);
  });
  console.log(data.data.languages)
};
window.addEventListener("load", () => {
  getLanguages();
});
