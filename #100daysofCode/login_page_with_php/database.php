<?php

define('LOCALHOST', 'localhost');
define('USERNAME', 'root');
define('PASSWORD', " ");
// define('DATABASE', 'localhost')


$conn = mysqli_connet(LOCALHOST, USERNAME, PASSWORD) or die(mysqli_error())
$select_db = mysqli_select_db($conn, 'databaseame') or die(mysqli_error());
?>