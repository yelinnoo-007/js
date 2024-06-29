<?php
phpinfo();
function performOperation($a, $b, $operation)
{
  return $operation($a, $b);
}

$add = fn ($x, $y) => $x + $y;
$sub = fn ($a, $b) => $a - $b;

echo "<h1>".performOperation(5, 5, $add)."</h1><br>";
echo performOperation(5, 5, $sub);
