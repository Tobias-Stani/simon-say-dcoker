# Guía de Configuración y Ejecución

Esta guía te proporciona los pasos necesarios para configurar y ejecutar este proyecto. Asegúrate de seguir cada paso en el orden especificado.

## Requisitos Previos

- **Docker**: Asegúrate de tener Docker y Docker Compose instalados en tu sistema. Puedes descargarlos e instalarlos desde [Docker's official website](https://www.docker.com/get-started).

## Paso 1: Clonar el Repositorio

1. Abre una terminal y ejecuta el siguiente comando para clonar el repositorio de GitHub:

   ```shell

   git clone https://github.com/Tobias-Stani/simon-say-dcoker.git

   ```

## Paso 2: Configurar la Base de Datos

1. Abre una terminal y navega hasta la carpeta `php-code`.

2. Busca el archivo `simon.sql` y copia todo su contenido.

## Paso 3: Iniciar el contenedor con Apache, MySQL y PHP

1. Ejecuta el siguiente comando para inciar el contendeor que contiene apache, mysql y php

   ```shell

  docker-compose up -d 

   ```

## Paso 4: Crear una Base de Datos

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
## Paso 6: IMPORTANTE

 Como ultimo paso, asegurate de crear un archivo '.env' en la raiz del proyecto que contenga ls siguientes variables 

 ```shell
mysql_root_password=contraseña_de_root
mysql_database=nombre_de_la_base_de_datos


```
   Si es necesario, podes detener el contenedor usando el siguiente comando 

   ```shell

   docker-compose down 


   ```

   Asegurate de reemplazar la clave y el nombre de la bd con los valores adecuados, estas variables son necesarias para ejecutar ell contenedor correctamenete