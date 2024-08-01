const toggleButtons = document.querySelectorAll('input[name="role"]');
toggleButtons.forEach(button => {
    button.addEventListener('change', function() {
        document.body.style.backgroundColor = this.value === 'patient' ? 'red' : 'blue';
    });
});
