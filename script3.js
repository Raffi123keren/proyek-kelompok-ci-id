document.getElementById('portfolioContactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('contactEmail');
    const message = document.getElementById('contactMessage');
    
    const emailError = document.getElementById('contactEmailError');
    const messageError = document.getElementById('contactMessageError');
    const successBox = document.getElementById('contactSuccess');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    // Validasi Email
    if (!emailPattern.test(email.value.trim())) {
        emailError.style.display = "block";
        email.style.borderColor = "#f87171";
        isValid = false;
    } else {
        emailError.style.display = "none";
        email.style.borderColor = "rgba(255,255,255,0.2)";
    }

    // Validasi Pesan
    if (message.value.trim() === "") {
        messageError.style.display = "block";
        message.style.borderColor = "#f87171";
        isValid = false;
    } else {
        messageError.style.display = "none";
        message.style.borderColor = "rgba(255,255,255,0.2)";
    }

    // Aksi jika valid
    if (isValid) {
        successBox.style.display = "block";
        document.getElementById('portfolioContactForm').reset();
    } else {
        successBox.style.display = "none";
    }
});