- Google Translate is a multilingual neural machine translation service developed by Google to translate text.
- Allows programatic integration with Google Translate. Cloud Translation can dynamically translate text between thousands of language pairs
- You need to provide an API key and host by registering at rapidapi.com in order to get the work done. Also as I'm using 
js modularity , you need to run this project with live server.
- As you can see, there is a file named "myapikeys.js" indside the .gitignore file. So, as you clone this repository to your local machine, you can make a file same as "myapikeys.js" (any naming), and put your api key and host inside of it as following example :

const API_KEY_1 = "123456789123684615415416";
const API_KEY_2 = "google-translator9.p.rapidapi.com";
export {API_KEY_1 , API_KEY_2}

