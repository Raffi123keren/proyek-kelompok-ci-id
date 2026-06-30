document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman saat submit

    // Mengambil elemen input
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Mengambil elemen error message
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    let isValid = true;

    // 1. Validasi Nama
    if (nameInput.value.trim() === "") {
        nameError.style.display = "block";
        nameInput.style.borderColor = "#ef4444";
        isValid = false;
    } else {
        nameError.style.display = "none";
        nameInput.style.borderColor = "#cbd5e1";
    }

    // 2. Validasi Email (Menggunakan Regex dasar)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.style.display = "block";
        emailInput.style.borderColor = "#ef4444";
        isValid = false;
    } else {
        emailError.style.display = "none";
        emailInput.style.borderColor = "#cbd5e1";
    }

    // 3. Validasi Pesan
    if (messageInput.value.trim() === "") {
        messageError.style.display = "block";
        messageInput.style.borderColor = "#ef4444";
        isValid = false;
    } else {
        messageError.style.display = "none";
        messageInput.style.borderColor = "#cbd5e1";
    }

    // Jika semua input valid, tampilkan pesan sukses
    if (isValid) {
        successMessage.style.display = "block";
        
        // Reset form setelah sukses
        document.getElementById('contactForm').reset();
        
        // Sembunyikan pesan sukses otomatis setelah 5 detik
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 5000);
    }
});