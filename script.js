// validate password with regEx
const password = document.querySelector("#password");
password.addEventListener("input", validate);

function validate() {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;
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
    } else if (password.value.match(/[A-Z]/) === null) {
        passwordError.textContent = "You're missing an uppercase.";
    } else if (password.value.match(/[a-z]/) === null) {
        passwordError.textContent = "You're missing a lowercase.";
    } else if (password.value.match(/\d/) === null) {
        passwordError.textContent = "You're missing a digit.";
    } else if (password.value.length < 8 ) {
        passwordError.textContent = "Password has to be 8-20 characters."
    } else if (password.value.match(/[^A-Za-z\d]/)) {
        passwordError.textContent = "No special characters are allowed. (@.,!#)"
    }
    passwordError.classList.add("password-error");
};

// check if two password inputs are the same
const confirmPassword = document.querySelector('#confirm-password');
confirmPassword.addEventListener('input', checkPasswords);

function checkPasswords(){
    if (password.value === confirmPassword.value && password.validity.valid === true) {
        passwordError.textContent = "";
        passwordError.classList.remove("password-error");  
        confirmPassword.setCustomValidity("");
    } else {
        passwordError.classList.add("password-error");
        passwordError.textContent = "Passwords do not match.";
        confirmPassword.setCustomValidity("Password has to stay the same!");
    }
};

// check first name input if the format is valid
const firstName = document.querySelector("#first-name");
const firstNameSpan = document.querySelector("#first-name + span");

firstName.addEventListener('input', () => {
    if (firstName.validity.valid) {
        firstNameSpan.textContent = "";
        firstNameSpan.classList.remove("password-error");
    } else {
        showFirstNameError();
    }
});

function showFirstNameError(){
    if (firstName.validity.patternMismatch) {
        firstNameSpan.textContent = "Format: only upper and lowercase letters are allowed.";
    } else if (firstName.validity.valueMissing) {
        firstNameSpan.textContent = "You need to enter a name.";
    } else if (firstName.validity.tooShort) {
        firstNameSpan.textContent = "Name have to contain at least 2 letters."
    }
    firstNameSpan.classList.add("password-error");
};

// check last name input if the format is valid
const lastName = document.querySelector("#last-name");
const lastNameSpan = document.querySelector("#last-name + span");

lastName.addEventListener('input', ()=> {
    if (lastName.validity.valid) {
        lastNameSpan.textContent = "";
        lastNameSpan.classList.remove("password-error");
    } else {
        showLastNameError();
    }
});

function showLastNameError(){
    if(lastName.validity.patternMismatch) {
        lastNameSpan.textContent = "Format: only upper and lowercase letters are allowed.";
    } else if (lastName.validity.valueMissing) {
        lastNameSpan.textContent = "You need to enter a name.";
    }
    lastNameSpan.classList.add("password-error");
};

// check if email input has the correct format
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
        emailSpan.innerHTML = `Format: a local-part, the symbol @, and a domain.`;
    } else if (email.validity.valueMissing) {
        emailSpan.textContent = 'You need to enter an email.';
    }
    emailSpan.classList.add('password-error');
};

// check if number input has the correct format
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