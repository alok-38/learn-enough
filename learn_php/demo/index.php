<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo</title>
</head>

<body>
    <h1><?= "Hello, world!" ?></h1>
    <form method="GET" action="">
        <label for="name">Enter your name:</label>
        <input type="text" name="name" id="name" required>
        <button type="submit">Say Hello</button>
    </form>

    <?php
    if (isset($_GET['name'])) {
        $name = htmlspecialchars($_GET['name']);
        echo "<h2>Hello, $name!</h2>";
    }
    ?>

</body>

</html>