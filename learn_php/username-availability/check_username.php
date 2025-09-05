<?php
// check_username.php

$host = "localhost";
$user = "alok";
$pass = "password";
$db   = "mywebsite";

// Connect to DB
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die(json_encode(['error' => 'Database error']));
}

$username = trim($_GET['username'] ?? '');

if ($username === '') {
    echo json_encode(['available' => false, 'message' => 'No username provided']);
    exit;
}

// Check if username exists
$stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->store_result();

$isTaken = $stmt->num_rows > 0;

echo json_encode([
    'available' => !$isTaken,
    'message' => $isTaken ? 'Username is taken' : 'Username is available'
]);

$stmt->close();
$conn->close();
