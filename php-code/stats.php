<?php include('./includes/header.php')?>

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


// Realiza una consulta SQL para obtener los datos de los usuarios
$sql = "SELECT nombre, rondas_jugadas, veces_gano, veces_perdio FROM usuarios";
$result = $conn->query($sql);
?>

<h1 class="text-center mt-4">Estadísticas de Usuarios 🙊</h1>
<div class="container mt-5"> <!-- Aplicar margen superior -->
  <div class="row justify-content-center"> <!-- Centrar horizontalmente -->
    <div class="col-10">
      <table class="table shadow">
        <thead>
          <tr>
            <th scope="col">Nombre usuario</th>
            <th scope="col">Partidas jugadas</th>
            <th scope="col">Victorias</th>
            <th scope="col">Derrotas</th>
          </tr>
        </thead>
        <tbody>
        <?php
              if ($result->num_rows > 0) {
                  while ($row = $result->fetch_assoc()) {
                      echo "<tr>";
                      echo "<td>" . $row["nombre"] . "</td>";
                      echo "<td>" . $row["rondas_jugadas"] . "</td>";
                      echo "<td>" . $row["veces_gano"] . "</td>";
                      echo "<td>" . $row["veces_perdio"] . "</td>";
                      echo "</tr>";
                  }
              } else {
                  echo "<tr><td colspan='4'>No hay datos disponibles</td></tr>";
              }
              ?>
        </tbody>
      </table>
    </div>
  </div>
</div>



<?php include('./includes/footer.php')?>