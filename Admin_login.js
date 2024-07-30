document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
});
