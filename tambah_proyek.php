<?php
session_start();
// Koneksi ke database
$conn = mysqli_connect("localhost", "root", "", "portofolio_db");

if (isset($_POST['submit'])) {
    $judul = $_POST['judul'];
    $konten = $_POST['konten'];
    
    // Cek apakah ada user_id di session, jika tidak pakai angka 1
    $user_id = isset($_SESSION['user_id']) ? $_SESSION['user_id'] : 1;
    
    // Query untuk menyimpan data
    $query = "INSERT INTO projects (judul, konten, user_id) VALUES ('$judul', '$konten', '$user_id')";
    
    if (mysqli_query($conn, $query)) {
        // Jika berhasil, kembali ke dashboard
        header("Location: dashboard.php");
        exit();
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Tambah Proyek</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-5">
    <h2>Tambah Proyek Baru</h2>
    <form method="POST">
        <div class="mb-3">
            <label>Judul Proyek</label>
            <input type="text" name="judul" class="form-control" required>
        </div>
        <div class="mb-3">
            <label>Konten/Deskripsi</label>
            <textarea name="konten" class="form-control" required></textarea>
        </div>
        <button type="submit" name="submit" class="btn btn-primary">Simpan</button>
        <a href="dashboard.php" class="btn btn-secondary">Kembali</a>
    </form>
</body>
</html>