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
    if (password.value !== confirmPassword.value) {
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
const firstName = document.querySelector("#first-name");
const firstNameSpan = document.querySelector("#first-name + span");

const lastName = document.querySelector("#last-name");
const lastNameSpan = document.querySelector("#last-name + span");


firstName.addEventListener('input', () => {
    if (firstName.validity.valid) {
        firstNameSpan.textContent = "";
        firstNameSpan.classList.remove("password-error");
    } else {
        showFirstNameError();
    }
});

lastName.addEventListener('input', ()=> {
    if (lastName.validity.valid) {
        lastNameSpan.textContent = "";
        lastNameSpan.classList.remove("password-error");
    } else {
        showLastNameError();
    }
});

function showFirstNameError(){
    if (firstName.validity.patternMismatch) {
        firstNameSpan.textContent = "Format: only upper and lower case letters are allowed.";
    } else if (firstName.validity.valueMissing) {
        firstNameSpan.textContent = "You need to enter a name.";
    }
    firstNameSpan.classList.add("password-error");
};

function showLastNameError(){
    if(lastName.validity.patternMismatch) {
        lastNameSpan.textContent = "Format: only upper and lower case letters are allowed.";
    } else if (lastName.validity.valueMissing) {
        lastNameSpan.textContent = "You need to enter a name.";
    }
    lastNameSpan.classList.add("password-error");
};


const email = document.querySelector('#email');
const emailSpan = document.querySelector("#email + span");

email.addEventListener('input', ()=> {
    if (email.validity.valid) {
        emailSpan.textContent = "";
        emailSpan.classList.remove("password-error");
    } else {
        showEmailError();
    }
});

function showEmailError() {
    if (email.validity.patternMismatch) {
        emailSpan.innerHTML = `Format: a local-part, the symbol @, and a domain.
        <br>
        Example: john@gmail.com`;
    } else if (email.validity.valueMissing) {
        emailSpan.textContent = 'You need to enter an email.';
    }
    emailSpan.classList.add('password-error');
};

const phoneNumber = document.querySelector('#number');
const phoneNumberSpan = document.querySelector("#number + span");

phoneNumber.addEventListener('input', ()=> {
    if (phoneNumber.validity.valid) {
        phoneNumberSpan.textContent = "";
        phoneNumberSpan.classList.remove('password-error');
    } else {
        showPhoneNumberError();
    }
});

function showPhoneNumberError() {
    if (phoneNumber.validity.patternMismatch) {
        phoneNumberSpan.innerHTML = `Format: 12 digits that can be separated with space or dash.`;
    } else if (phoneNumber.validity.valueMissing) {
        phoneNumberSpan.textContent = "You need to enter a number.";
    }
    phoneNumberSpan.classList.add('password-error');
};