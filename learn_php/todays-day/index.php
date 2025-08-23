<?php
$user = "Alok";
echo "<h1>Welcome, $user!</h1>";
echo date("l");
$data = file_get_contents("https://api.example.com/news");
echo "<pre>$data</pre>";