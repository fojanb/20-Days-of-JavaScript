// POST - Translates
import { languages_menu } from "./app.js";
import { API_KEY_1, API_KEY_2 } from "./myapikeys.js";
const translated_text = document.getElementById("translated_text");
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
export { getTranslate };
