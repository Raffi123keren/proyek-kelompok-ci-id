<?php
session_start();
// Koneksi database
$conn = mysqli_connect("localhost", "root", "", "portofolio_db");

if(isset($_POST['submit'])) {
    $judul = $_POST['judul'];
    $konten = $_POST['konten'];
    $user_id = $_SESSION['user_id'];
    
    $query = "INSERT INTO projects (judul, konten, user_id) VALUES ('$judul', '$konten', '$user_id')";
    mysqli_query($conn, $query);
    header("Location: dashboard.php");
}
?>

<form method="POST">
    <input type="text" name="judul" placeholder="Judul Proyek" required>
    <textarea name="konten" placeholder="Isi Kodingan/Deskripsi"></textarea>
    <button type="submit" name="submit">Simpan</button>
</form>