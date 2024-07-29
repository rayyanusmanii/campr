document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const loginPopupBtn = document.querySelector('.btnLogin-popup');
    const logoutPopupBtn = document.querySelector('.btnLogout-popup');
    const iconClose = document.querySelector('.icon-close');
    const loginBtn = document.querySelector('.login-btn');
    const registerBtn = document.querySelector('.register-btn');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');
    const loginForm = document.querySelector('.form-box.login');
    const registerForm = document.querySelector('.form-box.register');
    const backButtons = document.querySelectorAll('.back-button');
    const navLinks = document.querySelectorAll('.navigation a');

    // Open Login Popup
    loginPopupBtn.addEventListener('click', () => {
        wrapper.style.display = 'flex';
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    // Open Register Popup
    registerLink.addEventListener('click', () => {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    // Back to Login from Register
    loginLink.addEventListener('click', () => {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    // Close Popup
    iconClose.addEventListener('click', () => {
        wrapper.style.display = 'none';
    });

    // Back Button
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            wrapper.style.display = 'none';
        });
    });

    // Handle Login
    loginBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const email = document.querySelector('.login input[type="email"]').value;
        const password = document.querySelector('.login input[type="password"]').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert('Login successful!');
            wrapper.style.display = 'none';
            loginPopupBtn.style.display = 'none';
            logoutPopupBtn.style.display = 'block';
        } else {
            alert('Invalid email or password!');
        }
    });

    // Handle Registration
    registerBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const username = document.querySelector('.register input[type="text"]').value;
        const email = document.querySelector('.register input[type="email"]').value;
        const password = document.querySelector('.register input[type="password"]').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.email === email);

        if (userExists) {
            alert('User already exists!');
        } else {
            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful!');
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
        }
    });

    // Handle Logout
    logoutPopupBtn.addEventListener('click', () => {
        alert('Logged out successfully!');
        loginPopupBtn.style.display = 'block';
        logoutPopupBtn.style.display = 'none';
    });
});
