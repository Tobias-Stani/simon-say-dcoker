# Simon Dice



## Instrucciones de Instalación

### 1. Clonar Repositorio

Para empezar, clona este repositorio en tu máquina local:

```bash
git clone https://github.com/Tobias-Stani/simon-say-dcoker.git
```
### 2. Iniciar el Docker

Asegúrate de tener Docker instalado en tu máquina. Luego, ejecuta el siguiente comando para iniciar el contenedor Docker para este proyecto:

```bash
docker-compose up -d
```

### 3. Crear la Base de Datos en phpMyAdmin

Una vez el docker este levantado accede a phpMyAdmin en tu navegador web visitando http://localhost:8081. Inicia sesión con las credenciales predeterminadas (si aplican) o las que hayas configurado. Luego, sigue estos pasos:

a. Crea una nueva base de datos llamada simon.

b. Selecciona la base de datos simon y ve a la pestaña "Importar". Sube el archivo simon.sql y ejecuta la importación.

### 4. ¡A Jugar y Disfrutar el Juego!

El juego está listo para ser jugado. Accede al juego a través de tu navegador web visitando http://localhost:8080 y diviértete jugando.
