# Simon Dice



## Instrucciones de Instalación

### 1. Clonar Repositorio

Para empezar, clona este repositorio en tu máquina local con el siguiente comando:

```bash
git clone https://github.com/Tobias-Stani/simon-say-dcoker.git
```
### 2. Iniciar el Docker

Asegúrate de tener Docker y Docker compose instalado en tu máquina. Luego, ejecuta el siguiente comando para iniciar el contenedor Docker para este proyecto:

```bash
docker-compose up -d
```

### 3. Crear la Base de Datos en phpMyAdmin

Una vez el docker este levantado accede a phpMyAdmin en tu navegador web visitando http://localhost:8081. Inicia sesión con las credenciales que se encuentran en el archivo "docker-compose.yml". Luego, sigue estos pasos:

a. Crea una nueva base de datos llamada simon.

b. En la base de datos llamada simon ve a la pesta pestaña importar

c. Importar el archivo usuarios.sql que se encuentra en la carpeta "sql"

d. Ejecuta la importación.

### 4. ¡A Jugar y Disfrutar el Juego!

El juego está listo para ser jugado. Accede al juego a través de tu navegador web visitando http://localhost:8080 y diviértete jugando.

### 5. ¡IMPORTANTE!

Por favor, verifica que el archivo 'dbConfig.php' contenga las credenciales correctas para acceder a la base de datos. En caso de que las credenciales sean incorrectas, utiliza las que están especificadas en el archivo 'docker-compose.yml'.
