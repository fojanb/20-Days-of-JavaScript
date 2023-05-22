const userName = document.getElementById("userName");
const password = document.getElementById("password");
const form = document.getElementById("valid_form");
const input_validation = (user_input, input_alert, e) => {
  if (!user_input.value) {
    e.preventDefault();
    user_input.nextElementSibling.classList.add("text-danger");
    user_input.nextElementSibling.innerText = `**Please fill the ${input_alert} field.`;
  } else {
    return;
  }
};
form.addEventListener("submit", (e) => {
  input_validation(userName, "username", e);
  input_validation(password, "password", e);
});
