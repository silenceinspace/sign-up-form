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
        passwordError.textContent = "You're missing an upper case.";
    } else if (password.value.search(/[a-z]/) === -1) {
        passwordError.textContent = "You're missing a lower case.";
    } else if (password.value.search(/\d/) === -1) {
        passwordError.textContent = "You're missing a digit.";
    } else if (password.value.length < 8 ) {
        passwordError.textContent = "Password has to be 8-20 characters."
    }
    passwordError.classList.add("password-error");
};

const confirmPassword = document.querySelector('#confirm-password');
confirmPassword.addEventListener('input', checkPasswords);

function checkPasswords(){
    if (password.value !== confirmPassword.value && password.value != null) {
        passwordError.classList.add("password-error");
        passwordError.textContent = "Passwords do not match.";

        confirmPassword.setCustomValidity("Password has to stay the same!");

    } else {
        passwordError.textContent = "";
        passwordError.classList.remove("password-error");

        confirmPassword.setCustomValidity("");
    }
};

// inputs for custom messages
// const firstName = document.querySelector("#first-name");

// const submitButton = document.querySelector(".create-account>button");
// submitButton.addEventListener('click', ()=> {

//     if (!firstName.checkValidity()) {
//         firstName.setCustomValidity("Format: only upper or lower case letters are allowed.");
//     } else{
//         firstName.setCustomValidity("");
//     }
// });