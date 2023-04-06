// POST - Detects => will detect the language of the sentence or word that user has typed into the input tag.
import { API_KEY_1, API_KEY_2 } from "./myapikeys.js";
import { from_language_input } from "./app.js";
import { getTranslate } from "./translates.js";
const detect = () => {
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
};
export { detect };
