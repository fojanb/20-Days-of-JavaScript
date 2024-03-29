const usersecret = document.getElementById("qr-content");
const form = document.getElementById("qr-form");
const reset = document.getElementById("reset");
let inputValue;
usersecret.addEventListener("change", (e) => {
  inputValue = e.target.value;
});
const showQR = (src) => {
  document.getElementById("qr-code").style.display = "block";
  document.getElementById("qr-code").src = src;
};
const resetQR = () => {
  usersecret.value = "";
  document.getElementById("qr-code").style.display = "none";
};
reset.addEventListener("click", resetQR);
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:3000/api/v1/qrcode", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: inputValue,
      }),
    });
    const data = await response.json();
    showQR(data.src);
  } catch (error) {
    console.log(error);
  }
});
