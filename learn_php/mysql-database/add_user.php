<?php
// DB credentials
$servername = "localhost";
$username = "alok";
$password = "password";
$dbname = "mywebsite";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert sample user
$sql = "INSERT INTO users (username, email) VALUES ('alok', 'alok@example.com')";

if ($conn->query($sql) === TRUE) {
    echo "New user added successfully";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
