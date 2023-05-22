const firstName = document.getElementById("name");
const email = document.getElementById("email");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const mobileNumber = document.getElementById("mobileNumber");
const form = document.getElementById("valid_form");
const input_validation = (user_input, input_alert, e) => {
  if (!user_input.value) {
    e.preventDefault();
    user_input.nextElementSibling.classList.add("text-danger");
    user_input.nextElementSibling.innerText = `**Please enter valid ${input_alert}.`;
  } else {
    return;
  }
};
form.addEventListener("submit", (e) => {
  input_validation(firstName, "name", e);
  input_validation(email, "email", e);
  input_validation(userName, "username", e);
  input_validation(password, "password", e);
  input_validation(confirmPassword, "password", e);
  input_validation(mobileNumber, "cell number", e);
});
