document.getElementById('donor-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Donor registered successfully!');
});

document.getElementById('profile-pic-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('profile-pic').src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

document.getElementById('eligibility').addEventListener('change', function(event) {
    const button = document.querySelector('.eligibility-button');
    if (event.target.checked) {
        button.textContent = 'Eligible';
        button.style.backgroundColor = '#007BFF';
    } else {
        button.textContent = 'Not Eligible';
        button.style.backgroundColor = '#FF0000';
    }
});
