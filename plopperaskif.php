<?php
$output = shell_exec('git pull');



$stringData = "fish";
$myFile = "davidlog.txt";
$fh = fopen($myFile, 'w') or die("can't open file");
fwrite($fh, $stringData);
fclose($fh);
?>