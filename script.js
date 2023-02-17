const password = document.querySelector("#password");
password.addEventListener("input", validate);

function validate() {

    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (re.test(password.value)){
        passwordError.textContent = "";
        passwordError.classList.remove("password-error");
        return true;
    } else {
        showError();
        return false;
    }
};

const passwordError = document.querySelector('#password + span');
function showError() {
    if (password.validity.valueMissing) {
        passwordError.textContent = "You need to enter a password.";
    } else if (password.value.search(/[A-Z]/) === -1) {
        passwordError.textContent = "You're missing an upper case";
    } else if (password.value.search(/[a-z]/) === -1) {
        passwordError.textContent = "You're missing a lower case";
    } else if (password.value.search(/\d/) === -1) {
        passwordError.textContent = "You're missing a digit";
    } else if (password.value.length < 8 ) {
        passwordError.textContent = "Password has to be 8-20 characters"
    }
    passwordError.classList.add("password-error");
};
