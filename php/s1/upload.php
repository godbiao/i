<?php
$file = $_FILES['file'];
$fileName = $file['name'];
$up_dir  = 'tmp/';
move_uploaded_file($file['tmp_name'],$up_dir.$fileName);
echo "<img src='$up_dir$fileName'>";
?>