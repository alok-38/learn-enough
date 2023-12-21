<?php
$user = "example_user";
$password = "Adapter@123";
$database = "example_database";
$table = "todo_list";

try {
	$db = new PDO("mysql:host=localhost;dbname=$database", $user, $password);
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

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

