const password = document.getElementById('password')
const confirm_pwd = document.getElementById('confirm_pwd')
const error_message = document.getElementById('error_message')

password.addEventListener("input", function (event) {
  if (password.validity.patternMismatch) {
    password.setCustomValidity("- Minimum eight characters,\n- at least one uppercase letter\n- one lowercase letter\n- one number\n- one special character");
  } else {
    password.setCustomValidity("");
  }
});

function confirm_password(event) {
  if (password.value == confirm_pwd.value) {
    error_message.classList.add('hidden');
  } else {
    error_message.classList.remove('hidden');
  }
}

password.addEventListener("keyup", confirm_password);
confirm_pwd.addEventListener("keyup", confirm_password);
