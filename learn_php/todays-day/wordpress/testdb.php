<?php
$mysqli = new mysqli('localhost', 'wpuser', 'a', 'wordpress');

if ($mysqli->connect_error) {
    die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
} else {
    echo 'Successfully connected to MySQL database.';
}
?>

