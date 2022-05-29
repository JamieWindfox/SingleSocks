const inputUsername = document.getElementById('usernameInput');
const inputPassword = document.getElementById('passwordInput');
const emailInput = document.getElementById('emailInput');

const submitButton = document.getElementById('submitButton');
const resetButton = document.getElementById('resetButton');

const loginForm = document.getElementById('loginForm');


resetButton.addEventListener('click', (e) => {
    loginForm.reset();
})
