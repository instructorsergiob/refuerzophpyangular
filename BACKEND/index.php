<?php
//Habilitamos los CORS en el BackEnd
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


//Usaremos la conexión
require('./conexion.php');

//Vamos a encapsular las peticiones GET, mediante una varible
$endpoint = isset($_GET['endpoint']) ? $_GET['endpoint'] : '';


//Validamos esa variable endpoint que esta en la linea 14
if($_SERVER['REQUEST_METHOD'] === 'GET'){

    if($endpoint == 'instructor'){
         //obtner los instructores
         $sql = 'SELECT * FROM instructor';
         $result = $conn->query($sql);
         $instructor = [];
         while($row = $result->fetch_assoc()){
                $instructor[] = $row;
         }

         echo json_encode(['success' => true, 'instructor' =>$instructor]);
    }else if($endpoint == 'aprendiz'){
        //obtner los instructores
        $sql = 'SELECT * FROM aprendiz';
        $result = $conn->query($sql);
        $aprendiz = [];
        while($row = $result->fetch_assoc()){
               $aprendiz[] = $row;
        }

        echo json_encode(['success' => true, 'aprendiz' =>$aprendiz]);
    }else if($endpoint == 'aprendiz_ficha'){
            
         //obtner los instructores
         $sql = 'SELECT 
             a.id AS aprendiz_id,
             a.nombre AS aprendiz_nombre,
             a.codigo AS aprendiz_codigo, 
             a.correo AS aprendiz_correo, 
             f.codigo AS ficha_codigo, 
             i.nombre AS instructor_nombre
         FROM 
            aprendiz a
         JOIN 
            ficha f ON a.codigo = f.codigo
         JOIN 
          instructor i ON f.instructor_id = i.id
         WHERE 
          f.codigo = 2721430';
         $result = $conn->query($sql);
         $aprendiz_ficha = [];
         while($row = $result->fetch_assoc()){
                $aprendiz_ficha[] = $row;
         }
 
         echo json_encode(['success' => true, 'aprendiz_ficha' =>$aprendiz_ficha]);

    }else{
        echo json_encode(['success' => false, 'error' => 'No existe este endopoint']);
    }

}