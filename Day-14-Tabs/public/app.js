import { tabs_info } from "./tab_infos.js";
const article = document.querySelector("article");
const tabs = document.querySelectorAll(".nav-bar .nav-item");
const handler = (e) => {
  let target = tabs_info.find((tab) => tab.id === e.target.id);
  document.querySelectorAll(".active_tab").forEach((tab) => {
    tab.classList.remove("active_tab");
  });
  e.target.classList.add("active_tab");
  article.innerHTML = `<p>${target.content}</p>`;
};
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    handler(e);
  });
});
window.addEventListener("load", () => {
  document.getElementById("home").classList.add("active_tab");
  article.innerHTML = `<p>home</p>`;
});
