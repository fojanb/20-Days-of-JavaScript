import { API_KEY_1, API_KEY_2 } from "./myapikeys.js";
const languages_menu = document.getElementById("languages");
// GET - request
const options_1 = {
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
    options_1
  ).then((response) => response.json());
  data.data.languages.forEach((language, index) => {
    let option = document.createElement("option");
    option.setAttribute("id", index);
    option.innerText = language.language;
    languages_menu.append(option);
  });
  console.log(data.data.languages);
};
// POST - request
const encodedParams = new URLSearchParams();
encodedParams.append("q", "Ich liebe Dich");

const options_2 = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "application/gzip",
    "X-RapidAPI-Key": API_KEY_1,
    "X-RapidAPI-Host": API_KEY_2,
  },
  body: encodedParams,
};

fetch(
  "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
  options_2
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
window.addEventListener("load", () => {
  getLanguages();
});
