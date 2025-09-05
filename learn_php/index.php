<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Read Status</title>
</head>

<body>
    <h1>Book Status</h1>

    <form method="post">
        <label for="have_read">Have you read <strong>Dark Matter</strong>?</label>
        <select name="have_read" id="have_read">
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
        <input type="submit" value="Submit">
    </form>
    <h2>
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $book = "Dark Matter";
            $have_read = $_POST['have_read'];

            if ($have_read == "yes") {
                echo "You have read {$book}.";
            } else {
                echo "You have not read {$book}.";
            }
        }
        ?>
    </h2>
</body>

</html>