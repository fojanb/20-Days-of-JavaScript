const usersecret = document.getElementById("qr-content");
const form = document.getElementById("qr-form");
let inputValue;
usersecret.addEventListener("change", (e) => {
  inputValue = e.target.value;
});
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
    document.getElementById("qr-code").src = data.src;
  } catch (error) {
    console.log(error);
  }
});
