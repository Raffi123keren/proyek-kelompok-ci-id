document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form memuat ulang halaman secara default

    const emailInput = document.getElementById('userEmail');
    const errorText = document.getElementById('emailError');
    const successBox = document.getElementById('successBox');

    // Ekspresi reguler (Regex) untuk validasi email standar
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value.trim())) {
        // Jika email salah/kosong
        errorText.style.display = "block";
        emailInput.style.borderColor = "#f87171";
        successBox.style.display = "none";
    } else {
        // Jika validasi sukses
        errorText.style.display = "none";
        emailInput.style.borderColor = "rgba(255,255,255,0.2)";
        
        // Tampilkan kotak sukses interaktif
        successBox.style.display = "block";
        
        // Bersihkan isian form
        document.getElementById('leadForm').reset();
    }
});