//doc eleements
const form = document.querySelector('form')
const pwdVerification = document.getElementById('pwdVerification')

const verification = (e) => {
    let pwd1 = document.getElementById('pwd').value;
    let pwd2 = document.getElementById('password').value;
    if (pwd1 != '' && pwd1 !== pwd2) {
        pwdVerification.innerText = 'Please verify your password.';
        return false;
    } return true;
}