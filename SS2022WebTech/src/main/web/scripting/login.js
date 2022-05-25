const inputUsername = document.getElementById('usernameInput');
const inputPassword = document.getElementById('passwordInput');
const submitButton = document.getElementById('submitButton');
const resetButton = document.getElementById('resetButton');
const loginForm = document.getElementById('loginForm');


resetButton.addEventListener('click', (e) => {
    loginForm.reset();
})


