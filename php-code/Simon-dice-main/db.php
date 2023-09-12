<?php

include('./dbConfig.php');

$servername = $nameServer; // Nombre del servidor de la base de datos
$username = $nameUser; // Nombre de usuario de la base de datos
$password = $clave; // Contraseña de la base de datos
$dbname = $nameDb; // Nombre de la base de datos

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$victorias = $_POST['victorias'];
$derrotas = $_POST['derrotas'];
$rondasJugadas = $_POST['rondasJugadas'];
$username = $_POST['username'];

// Prepara una consulta SQL para insertar los datos en una tabla
$sql = "INSERT INTO usuarios (nombre, rondas_jugadas, veces_gano, veces_perdio) VALUES ('$username', '$rondasJugadas', '$victorias', '$derrotas')";

// Ejecuta la consulta
if ($conn->query($sql) === TRUE) {
    echo "Datos insertados correctamente";
} else {
    echo "Error al insertar datos: " . $conn->error;
}

// Cierra la conexión
$conn->close();
?>



