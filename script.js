const form = document.querySelector("form");
const password = document.querySelector("#password");
const passwordError = document.querySelector
('#password + span');

password.addEventListener('input', (e) => {
    if (password.validity.valid) {
        passwordError.textContent = "";
    } else {
        showError();
    }
});

form.addEventListener("submit", (e) => {
    if (!password.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (password.validity.valueMissing) {
        passwordError.textContent = "You need to enter a password.";
    } else if (password.validity.patternMismatch) {
        passwordError.textContent = "Entered value needs to be of the proper format.";
    } else if (password.validity.tooShort) {
        passwordError.textContent = `Email should be at least ${password.minlength} characters; you entered ${password.value.length}.`;
    }
}

