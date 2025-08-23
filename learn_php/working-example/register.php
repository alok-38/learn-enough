<?php
// Database credentials
$host = "localhost";
$db = "mywebsite";
$user = "alok";
$pass = "password";

// Connect to database
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Sanitize + validate server-side
$username = trim($_POST['username'] ?? '');
$email = trim($_POST['email'] ?? '');

if ($username === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid input detected.");
}

// Insert into database
$stmt = $conn->prepare("INSERT INTO users (username, email) VALUES (?, ?)");
$stmt->bind_param("ss", $username, $email);

if ($stmt->execute()) {
    echo "✅ Registration successful!";
} else {
    echo "❌ Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
