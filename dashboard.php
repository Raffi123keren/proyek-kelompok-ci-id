<?php
session_start();
$conn = mysqli_connect("localhost", "root", "", "portofolio_db");
$data = mysqli_query($conn, "SELECT * FROM projects");
?>

<!DOCTYPE html>
<html>
<head>
    <title>Portofolio Muhammad Raffi Ramadhan</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h2>Daftar Proyek Portofolio</h2>
        <a href="tambah_proyek.php" class="btn btn-primary mb-3">+ Tambah Proyek Baru</a>
        
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Judul</th>
                    <th>Konten</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <?php while($row = mysqli_fetch_assoc($data)) : ?>
                <tr>
                    <td><?= $row['judul']; ?></td>
                    <td><?= $row['konten']; ?></td>
                    <td>
                        <a href="edit_proyek.php?id=<?= $row['id']; ?>" class="btn btn-warning btn-sm">Edit</a>
                        <a href="hapus.php?id=<?= $row['id']; ?>" class="btn btn-danger btn-sm">Hapus</a>
                    </td>
                </tr>
                <?php endwhile; ?>
            </tbody>
        </table>
    </div>
</body>
</html>