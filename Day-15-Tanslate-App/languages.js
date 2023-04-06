// GET - Languages => will recieve all the available languages around the world.
import { API_KEY_1, API_KEY_2 } from "./myapikeys.js";
import { languages_menu } from "./app.js";
const options_1 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY_1,
    "X-RapidAPI-Host": API_KEY_2,
  },
};
const getLanguages = async () => {
  let data = await fetch(
    "https://google-translator9.p.rapidapi.com/v2/languages",
    options_1
  ).then((response) => response.json());
  data.data.languages.forEach((language, index) => {
    let option = document.createElement("option");
    option.setAttribute("id", index);
    option.innerText = language.language;
    languages_menu.append(option);
  });
};
export { getLanguages };
