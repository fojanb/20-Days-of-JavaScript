import { lorem } from "./lorem.js";
const article = document.querySelector("article");
const tabs = document.querySelectorAll(".nav-bar .nav-item");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "home":
        document.querySelectorAll(".active_tab").forEach((tab) => {
          tab.classList.remove("active_tab");
        });
        e.target.classList.add("active_tab");
        article.innerHTML = `<p>${lorem}</p>`;
        break;
      case "about":
        document.querySelectorAll(".active_tab").forEach((tab) => {
          tab.classList.remove("active_tab");
        });
        e.target.classList.add("active_tab");
        article.innerHTML = `<p>${lorem}</p><p>${lorem}</p>`;
        break;
      case "services":
        document.querySelectorAll(".active_tab").forEach((tab) => {
          tab.classList.remove("active_tab");
        });
        e.target.classList.add("active_tab");
        article.innerHTML = `<p>${lorem}</p>`;
        break;
      case "contact":
        document.querySelectorAll(".active_tab").forEach((tab) => {
          tab.classList.remove("active_tab");
        });
        e.target.classList.add("active_tab");
        article.innerHTML = `<p>${lorem}</p><p>${lorem}</p>`;
        break;
    }
  });
});
window.addEventListener("load", () => {
  document.getElementById("home").classList.add("active_tab");
  article.innerHTML = `<p>${lorem}</p>`;
});
