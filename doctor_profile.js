document.getElementById('doctor-profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Profile saved successfully!');
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
