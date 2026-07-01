<?php
$conn = mysqli_connect("localhost", "root", "", "portofolio_db");
$id = $_GET['id'];
$data = mysqli_query($conn, "SELECT * FROM projects WHERE id = '$id'");
$p = mysqli_fetch_assoc($data);

if(isset($_POST['update'])) {
    $judul = $_POST['judul'];
    $konten = $_POST['konten'];
    mysqli_query($conn, "UPDATE projects SET judul='$judul', konten='$konten' WHERE id='$id'");
    header("Location: dashboard.php");
}
?>

<form method="POST">
    <input type="text" name="judul" value="<?= $p['judul']; ?>">
    <textarea name="konten"><?= $p['konten']; ?></textarea>
    <button type="submit" name="update">Simpan Perubahan</button>
</form>