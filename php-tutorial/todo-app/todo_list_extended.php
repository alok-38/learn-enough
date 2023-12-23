<?php
$user = "example_user";
$password = "Adapter@123";
$database = "example_database";
$table = "todo_list";

try {
    $db = new PDO("mysql:host=localhost;dbname=$database", $user, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Check if the form is submitted
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (isset($_POST['new_todo'])) {
            $newTodo = $_POST['new_todo'];

            // Insert new TODO item into the database
            $stmt = $db->prepare("INSERT INTO $table (content) VALUES (:content)");
            $stmt->bindParam(':content', $newTodo);
            $stmt->execute();
        } elseif (isset($_POST['check_todo'])) {
            $itemToCheck = $_POST['check_todo'];

            // Check if the item exists in the database
            $stmt = $db->prepare("SELECT COUNT(*) AS count FROM $table WHERE content = :content");
            $stmt->bindParam(':content', $itemToCheck);
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($result['count'] > 0) {
                echo "The item '$itemToCheck' is in the database.";
            } else {
                echo "The item '$itemToCheck' is NOT in the database.";
            }
        }
    }

    // Display the TODO list
    echo "<h2>TODO</h2><ol>";

    $stmt = $db->prepare("SELECT content FROM $table");
    $stmt->execute();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "<li>" . htmlspecialchars($row['content']) . "</li>";
    }

    echo "</ol>";

} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>

<!-- HTML form for adding and checking TODO items -->
<form method="POST" action="">
    <label for="new_todo">Add new item:</label>
    <input type="text" id="new_todo" name="new_todo" required>
    <button type="submit">Add</button>
</form>

<form method="POST" action="">
    <label for="check_todo">Check item:</label>
    <input type="text" id="check_todo" name="check_todo" required>
    <button type="submit">Check</button>
</form>
