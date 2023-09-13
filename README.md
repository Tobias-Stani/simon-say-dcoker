# Guía de Configuración y Ejecución

Esta guía te proporciona los pasos necesarios para configurar y ejecutar este proyecto. Asegúrate de seguir cada paso en el orden especificado.

## Requisitos Previos

- **Docker**: Asegúrate de tener Docker y Docker Compose instalados en tu sistema. Puedes descargarlos e instalarlos desde [Docker's official website](https://www.docker.com/get-started).

## Paso 1: Configurar la Base de Datos

1. Abre una terminal y navega hasta la carpeta `php-code`.

2. Busca el archivo `simon.sql` y copia todo su contenido.

## Paso 2: Crear una Base de Datos

1. En la base de datos llamada pegamos el archivo de simon.sql

2. Ejecuta el siguiente comando para crear un contenedor de base de datos MySQL o MariaDB con el nombre "simon":

   ```shell
   docker-compose up -d db



## Paso 3: Configurar la conexion a la base de datos

1. Una vez que el contenedor de la base de datos este en funcionamiento, buscamos en la carpeta 'php-code' el archivo 'dbConfig.php'

2. Abri el archivo y actualiza los siguientes valores con la informacion correspondiente al contenedor de la base de datos que creaste en el paso 2 

## Examples

```php
<?php

$nameServer = 'Nombre del servidor de la bd'; 
$nameUser = 'Nombre de usuario';
$clave = 'Clave de la bd';
$nameDb = 'simon';

?>
```
## Paso 5: A DISFRUTAR!!