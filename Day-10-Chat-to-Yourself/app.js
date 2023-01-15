const data = {
  form: document.querySelector(".container form"),
  button: document.querySelector(".container button"),
  defaultMessage: "You deserve happiness",
  alert : document.querySelector(".show"),
};
data.form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (data.form.querySelector("input").value === "") {
    data.alert.style.display = "block";
    setInterval(() => {data.alert.style.display = "none"},2000);
  } else {
    data.alert.style.display = "none";
    document.querySelector("#message").innerText =
      data.form.querySelector("input").value;
    data.form.querySelector("input").value = "";
  }
});
window.addEventListener("load", () => {
  document.querySelector("#message").innerText = data.defaultMessage;
});
