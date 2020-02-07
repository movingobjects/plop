<?php

  function writeToFile($file, $data) {
    file_put_contents($file, $data);
  }

  $MAX_LEN = 1000;
  $text = $_POST["text"];

  if (strlen($text) > $MAX_LEN) {
    $text = substr($text, 0, $MAX_LEN);
  }

  writeToFile('text.txt', $text); 

?>
