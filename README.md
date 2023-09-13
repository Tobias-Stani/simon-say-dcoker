# Guía de Configuración y Ejecución

Esta guía te proporciona los pasos necesarios para configurar y ejecutar este proyecto. Asegúrate de seguir cada paso en el orden especificado.

## Requisitos Previos

- **Docker**: Asegúrate de tener Docker y Docker Compose instalados en tu sistema. Puedes descargarlos e instalarlos desde [Docker's official website](https://www.docker.com/get-started).

## Paso 1: Clonar el Repositorio

1. Abre una terminal y ejecuta el siguiente comando para clonar el repositorio de GitHub:

   ```shell
   git clone https://github.com/Tobias-Stani/simon-say-dcoker.git


## Paso 2: Configurar la Base de Datos

1. Abre una terminal y navega hasta la carpeta `php-code`.

2. Busca el archivo `simon.sql` y copia todo su contenido.

## Paso 3: Crear una Base de Datos

1. En la base de datos llamada pegamos el archivo de simon.sql


## Paso 5: Configurar la conexion a la base de datos

1. Una vez que el contenedor de la base de datos este en funcionamiento, buscamos en la carpeta 'php-code' el archivo 'dbConfig.php'

2. Abri el archivo y actualiza los siguientes valores con la informacion correspondiente al contenedor de la base de datos que creaste en el paso 2 

## Ejemplo

```php
<?php

$nameServer = 'Nombre del servidor de la bd'; 
$nameUser = 'Nombre de usuario';
$clave = 'Clave de la bd';
$nameDb = 'simon';

?>
```
## Paso 6: A DISFRUTAR!!