<?php
$senha = ''; // Substitua por sua senha desejada
$senhaHash = password_hash($senha, PASSWORD_DEFAULT);
echo $senhaHash;
?>
