const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
//Event handler
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();
    if (usernameValue === '') {
        showError(username, "UserName Cannot be Blank!");
    } else if (!isUsernameValid(usernameValue)) {
        showError(username, "UserName is not valid");
    } else {
        showSuccess(username);
    }
    // ---------------
    if (emailValue === '') {
        showError(email, "Email Cannot be Blank!");
    } else if (!isEmailValid(emailValue)) {
        showError(email, "Email is not valid");
    } else {
        showSuccess(email);
    }
    // -------------
    if (password1Value === '') {
        showError(password1, "Password Cannot be Blank!");
    } else if (!isPasswordValid(password1Value)) {
        showError(password1, "Password must be atleast 8 characters long");
    } else {
        showSuccess(password1);
    }
    // ---------
    if (password2Value === '') {
        showError(password2, "Password Cannot be Blank!");
    } else if (password2Value != password1Value) {
        showError(password2, "Password Not Matched");
    } else if (password2Value.length < 8) {
        showError(password2, "Enter a longer password");
    } else {
        showSuccess(password2);
    }
}

function showError(input, msg) {
    const formControl = input.parentNode;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
}

function isEmailValid(email) {
    return /^([A-Za-z0-9_\.\-]+)@([A-Za-z]+).([A-za-z]{2,3})$/.test(email);
}

function isPasswordValid(password) {
    return /^([A-Za-z0-9_\$\.\@\-]+){8,}/.test(password);
}

function isUsernameValid(username) {
    return /^([a-z0-9]+){8,}/.test(username);
}