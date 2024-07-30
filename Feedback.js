document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const role = document.querySelector('input[name="role"]:checked').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
    console.log(`Role: ${role}, Rating: ${rating}, Comment: ${comment}`);
});
