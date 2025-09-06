<?php
session_start(); // Start the session

function getGreetingMessage($name)
{
    $hour = date("H");

    if ($hour < 12) {
        $greeting = "Good morning";
    } elseif ($hour < 18) {
        $greeting = "Good afternoon";
    } else {
        $greeting = "Good evening";
    }

    return "$greeting, $name!";
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["name"])) {
    $name = htmlspecialchars(trim($_POST["name"]));
    $_SESSION["name"] = $name;
}

// Use session name if available
$displayName = $_SESSION["name"] ?? null;
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Enhanced Greeting App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
            background-color: #f4f4f4;
            color: #333;
        }

        form {
            margin-top: 20px;
        }

        input[type="text"] {
            padding: 8px;
            font-size: 16px;
        }

        button {
            padding: 8px 12px;
            font-size: 16px;
            cursor: pointer;
        }

        .greeting {
            margin-top: 30px;
            font-size: 24px;
            color: #2c3e50;
        }

        .reset {
            margin-top: 10px;
        }
    </style>
</head>

<body>

    <h1>Welcome to the Enhanced Greeting App</h1>

    <?php if (!$displayName): ?>
        <form method="POST" action="">
            <label for="name">Enter your name:</label>
            <input type="text" name="name" id="name" required>
            <button type="submit">Greet Me</button>
        </form>
    <?php else: ?>
        <div class="greeting">
            <?= getGreetingMessage($displayName); ?>
        </div>
        <form method="POST" action="" class="reset">
            <button type="submit" name="reset">Not you? Click here to reset</button>
        </form>
    <?php endif; ?>

    <?php
    // Reset session
    if (isset($_POST["reset"])) {
        session_unset();
        session_destroy();
        header("Location: " . $_SERVER["PHP_SELF"]);
        exit;
    }
    ?>

</body>

</html>