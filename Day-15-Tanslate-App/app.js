import { API_KEY_1, API_KEY_2 } from "./myapikeys.js";
const languages_menu = document.getElementById("languages");
const from_language_input = document.getElementById("user_input");
const translated_text = document.getElementById("translated_text");
// GET - Languages => will send all the available languages around the world.
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

// end of GET
// POST - Translates
const getTranslate = async (user_string, detectedLang) => {
  translated_text.innerText = "";
  languages_menu.addEventListener("change", async (e) => {
    const options_3 = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": API_KEY_1,
        "X-RapidAPI-Host": API_KEY_2,
      },
      body: `{"q":"${user_string}","source":"${detectedLang}","target":"${e.target.value}","format":"text"}`,
    };

    let data = await fetch(
      "https://google-translator9.p.rapidapi.com/v2",
      options_3
    ).then((response) => response.json());
    translated_text.innerText = data.data.translations[0].translatedText;
  });
};
// POST - Detects => will detect the language of the sentence or word that user has typed on the input tag.
from_language_input.addEventListener("change", async (e) => {
  const options_2 = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": API_KEY_1,
      "X-RapidAPI-Host": API_KEY_2,
    },
    body: `{"q":"${e.target.value}"}`,
  };

  let data = await fetch(
    "https://google-translator9.p.rapidapi.com/v2/detect",
    options_2
  ).then((response) => response.json());
  // End of POST
  getTranslate(e.target.value, data.data.detections[0][0].language);
});

window.addEventListener("load", () => {
  getLanguages();
});
