// Mengambil elemen HTML berdasarkan ID
const btnMode = document.getElementById('btnMode');
const statusMode = document.getElementById('status');

// Menambahkan fungsi klik pada tombol
btnMode.addEventListener('click', function() {
    // Toggle (pasang/lepas) class 'dark-theme' pada tag body
    document.body.classList.toggle('dark-theme');
    
    // Cek apakah saat ini sedang menggunakan tema gelap atau tidak
    if (document.body.classList.contains('dark-theme')) {
        statusMode.textContent = "Mode saat ini: Mode Gelap 🌙";
        btnMode.textContent = "Ubah ke Mode Terang";
    } else {
        statusMode.textContent = "Mode saat ini: Mode Terang ☀️";
        btnMode.textContent = "Ubah ke Mode Gelap";
    }
});

// Pesan selamat datang di konsol browser (F12) untuk dosen saat memeriksa
console.log("Platform Muhammad Raffi Ramadhan berhasil dimuat!");