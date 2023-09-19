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

// Obtén el nombre de usuario enviado a través de POST
$username = $_POST['username'];

// Verifica si el nombre de usuario ya existe en la base de datos
$sql = "SELECT COUNT(*) as count FROM usuarios WHERE nombre = '$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $count = $row['count'];
    
    if ($count > 0) {
        // El nombre de usuario ya existe, muestra un mensaje de error
        echo "El nombre de usuario ya está en uso. Introduce un nombre de usuario diferente.";
    } else {
        // El nombre de usuario no existe, puedes continuar con la inserción
        // Obtén los valores de los contadores y otros datos
        $victorias = $_POST['victorias'];
        $derrotas = $_POST['derrotas'];
        $rondasJugadas = $_POST['rondasJugadas'];

        // Prepara una consulta SQL para insertar los datos en la tabla
        $insertSql = "INSERT INTO usuarios (nombre, rondas_jugadas, veces_gano, veces_perdio) VALUES ('$username', '$rondasJugadas', '$victorias', '$derrotas')";

        // Ejecuta la consulta de inserción
        if ($conn->query($insertSql) === TRUE) {
            echo "Datos insertados correctamente";
        } else {
            echo "Error al insertar datos: " . $conn->error;
        }
    }
} else {
    echo "Error al verificar el nombre de usuario: " . $conn->error;
}

// Cierra la conexión
$conn->close();
?>



