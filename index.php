<?php

  $filename = "text.txt";
  $file = fopen($filename, "r");

  if ($file == false) {
    exit();
  }

  $filesize = filesize($filename);
  if ($filesize == 0) {
    $filesize = 1;
  }
  $filetext = fread($file, $filesize);
  fclose($file);

?>

<!DOCTYPE html>
<html>
  <head>
    <title>Plop</title>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>

    <textarea id="text-input"><?php echo ($filetext); ?></textarea>

    <button id="save-btn">Plop</button>

    <script src="plop.js"></script>

  </body>
</html>
