<?php

$salario1 = 1000;
$salario2 = 2000;

$salario2 = $salario1;

$salario2 += 1;

$salario1 *= 1.10;

echo "Valor Salário 1: " . number_format($salario1, 2, ',', '.') . " e Valor Salário 2: " . number_format($salario2, 2, ',', '.');
?>
