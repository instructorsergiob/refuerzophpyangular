<?php


try {
    //Esta es la parte positiva
    $localhost = "localhost";
    $username = "root";
    $userpassword = "";
    $userdatabase = "angularconphp";

    $conn = new mysqli($localhost,$username,$userpassword,$userdatabase);
    
} catch (\Throwable $th) {
    //Esta es la parte negativa del bloque
    echo "Error en la conexión";
}