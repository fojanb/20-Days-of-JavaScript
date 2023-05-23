const firstName = document.getElementById("name");
const email = document.getElementById("email");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const mobileNumber = document.getElementById("mobileNumber");
const form = document.getElementById("valid_form");
const show_passwrod = document.getElementById("visibility");
const input_validation = (user_input, input_alert, e) => {
  if (!user_input.value) {
    e.preventDefault();
    user_input.nextElementSibling.classList.add("text-danger");
    user_input.nextElementSibling.innerText = `** Please fill the ${input_alert} field.`;
  } else {
    return;
  }
};
const name_validation = (name_input, msg, e) => {
  if (!name_input.value) {
    e.preventDefault();
    name_input.nextElementSibling.classList.add("text-danger");
    name_input.nextElementSibling.innerText = `** Please fill the ${msg} field.`;
    return;
  }
  if (!isNaN(name_input.value)) {
    e.preventDefault();
    name_input.nextElementSibling.classList.add("text-danger");
    name_input.nextElementSibling.innerText = `** Must be alphabetic characters.`;
    return;
  }
  if (name_input.value.length <= 3 || name_input.value.length >= 20) {
    e.preventDefault();
    name_input.nextElementSibling.classList.add("text-danger");
    name_input.nextElementSibling.innerText = `** Must be between 3 to 20 long characters.`;
  } else {
    return;
  }
};
const email_validation = (email_input, msg, e) => {
  if (!email_input.value) {
    e.preventDefault();
    email_input.nextElementSibling.classList.add("text-danger");
    email_input.nextElementSibling.innerText = `** Please fill the ${msg} field.`;
    return;
  }
  if (email_input.value.indexOf("@") <= 0) {
    e.preventDefault();
    email_input.nextElementSibling.classList.add("text-danger");
    email_input.nextElementSibling.innerText = `** Invalid email address.`;
  } else {
    return;
  }
};
const password_validation = (pass, msg, e) => {
  if (!pass.value) {
    e.preventDefault();
    pass.nextElementSibling.classList.add("text-danger");
    pass.nextElementSibling.innerText = `** Please fill the ${msg} field.`;
    return;
  }
  if (pass.value.length <= 9 || pass.value.length >= 15) {
    e.preventDefault();
    pass.nextElementSibling.classList.add("text-danger");
    pass.nextElementSibling.innerText = `** Must be between 9 to 15 long numbers and alphabets.`;
  } else {
    if (pass.value != confirmPassword.value){
      e.preventDefault();
      confirmPassword.nextElementSibling.classList.add("text-danger");
      confirmPassword.nextElementSibling.innerText = "** Password mismatch. "
    };
  }
};
show_passwrod.addEventListener("click" , (e) => {
  if(e.target.checked){
    password.type = "text";
  }else{
    password.type = "password";
  }
});
form.addEventListener("submit", (e) => {
  name_validation(firstName, "name", e);
  name_validation(userName, "username", e);
  email_validation(email, "email", e);
  password_validation(password, "password", e);
  password_validation(confirmPassword, "password", e);
  input_validation(mobileNumber, "cell number", e);
});
