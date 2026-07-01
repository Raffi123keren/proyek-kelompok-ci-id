<?php
$conn = mysqli_connect("localhost", "root", "", "portofolio_db");
$id = $_GET['id'];

mysqli_query($conn, "DELETE FROM projects WHERE id = '$id'");
header("Location: dashboard.php");
?>