const round = document.getElementById('round');
const simonButtons = document.getElementsByClassName('square');
const startButton = document.getElementById('startButton');

    //guarda el nombre del usuario
    document.getElementById("submitButton").addEventListener("click", function() {
        // Obtener el valor del campo de texto
        var username = document.getElementById("usernameInput").value;
    
        // Guardar el valor en una variable en JavaScript
        // Puedes hacer lo que quieras con la variable 'username' aquí
        console.log("Nombre de usuario ingresado: " + username);
    });



class Simon {
    constructor(simonButtons, startButton, round) {
        this.round = 0;
        this.userPosition = 0;
        this.totalRounds = 5;
        this.sequence = [];
        this.speed = 1000;
        this.blockedButtons = true;
        this.buttons = Array.from(simonButtons);
        this.rondasJugadas = 0;
        this.victorias = 0;
        this.derrotas = 0;
        this.display = {
            startButton,
            round
        }
        this.errorSound = new Audio('./sounds/error.wav');
        this.buttonSounds = [
            new Audio('./sounds/1.mp3'),
            new Audio('./sounds/2.mp3'),
            new Audio('./sounds/3.mp3'),
            new Audio('./sounds/4.mp3'),
        ]
    }


    // Inicia el Simon
    init() {
        this.display.startButton.onclick = () => this.startGame();
    }

    // Comienza el juego
    startGame() {
        this.display.startButton.disabled = true;
        this.updateRound(0);
        this.userPosition = 0;
        this.sequence = this.createSequence();
        this.buttons.forEach((element, i) => {
            element.classList.remove('winner');
            element.onclick = () => this.buttonClick(i);
        });

        // Incrementa el contador de rondas jugadas
        this.rondasJugadas++;

        // Actualiza el contador de rondas jugadas en pantalla
        const contadorRondas = document.getElementById('contadorRondas');
        if (contadorRondas) {
            contadorRondas.textContent = this.rondasJugadas;
        }

        this.showSequence();
    }

    // Actualiza la ronda y el tablero
    updateRound(value) {
        this.round = value;
        this.display.round.textContent = `Round ${this.round}`;
    }

    // Crea el array aleatorio de botones
    createSequence() {
        return Array.from({length: this.totalRounds}, () =>  this.getRandomColor());
    }

    // Devuelve un número al azar entre 0 y 3
    getRandomColor() {
        return Math.floor(Math.random() * 4);
    }

    // Ejecuta una función cuando se hace click en un botón
    buttonClick(value) {
        !this.blockedButtons && this.validateChosenColor(value);
    }

    // Valida si el boton que toca el usuario corresponde a al valor de la secuencia
    validateChosenColor(value) {
        if(this.sequence[this.userPosition] === value) {
            this.buttonSounds[value].play();
            if(this.round === this.userPosition) {
                this.updateRound(this.round + 1);
                this.speed /= 1.02;
                this.isGameOver();
            } else {
                this.userPosition++;
            }
        } else {
            this.gameLost();
        }
    }

    // Verifica que no haya acabado el juego
    isGameOver() {
        if (this.round === this.totalRounds) {
            this.gameWon();
        } else {
            this.userPosition = 0;
            this.showSequence();
        };
    }

    // Muestra la secuencia de botones que va a tener que tocar el usuario
    showSequence() {
        this.blockedButtons = true;
        let sequenceIndex = 0;
        let timer = setInterval(() => {
            const button = this.buttons[this.sequence[sequenceIndex]];
            this.buttonSounds[this.sequence[sequenceIndex]].play();
            this.toggleButtonStyle(button)
            setTimeout( () => this.toggleButtonStyle(button), this.speed / 2)
            sequenceIndex++;
            if (sequenceIndex > this.round) {
                this.blockedButtons = false;
                clearInterval(timer);
            }
        }, this.speed);
    }

    // Pinta los botones para cuando se está mostrando la secuencia
    toggleButtonStyle(button) {
        button.classList.toggle('active');
    }

    // Actualiza el simon cuando el jugador pierde
    gameLost() {
        this.errorSound.play();
        this.display.startButton.disabled = false;
        this.blockedButtons = true;

        // Incrementar el contador de derrotas
        this.derrotas++;

        // Actualizar el contador de derrotas en pantalla
        const contadorDerrotas = document.getElementById('contadorDerrotas');
        if (contadorDerrotas) {
            contadorDerrotas.textContent = this.derrotas;
        }
    }

    // Muestra la animación de triunfo y actualiza el simon cuando el jugador gana
    gameWon() {
        this.display.startButton.disabled = false;
        this.blockedButtons = true;
        this.buttons.forEach(element => {
            element.classList.add('winner');
        });
        this.updateRound('🏆');

        // Incrementar el contador de victorias
        this.victorias++;

        // Actualizar el contador de victorias en pantalla
        const contadorVictorias = document.getElementById('contadorVictorias');
        if (contadorVictorias) {
            contadorVictorias.textContent = this.victorias;
        }
    }
}


// $(document).ready(function() {
//     $('#enviarDatos').click(function() {
//         // Obtén los valores de los contadores
//         const victorias = simon.victorias;
//         const derrotas = simon.derrotas;
//         const rondasJugadas = simon.rondasJugadas;

//         // Obtén el nombre de usuario
//         const username = $('#usernameInput').val(); // Suponiendo que tengas un input con el ID 'usernameInput'

//         // Crea un objeto con los datos
//         const datos = {
//             victorias: victorias,
//             derrotas: derrotas,
//             rondasJugadas: rondasJugadas,
//             username: username // Agrega el nombre de usuario al objeto
//         };

//         // Realiza una solicitud AJAX para enviar los datos al archivo PHP
//         $.ajax({
//             type: 'POST',
//             url: 'db.php', // Reemplaza con la URL de tu archivo PHP
//             data: datos,
//             success: function(response) {
//                 // Maneja la respuesta del servidor si es necesario
//                 console.log('Datos enviados con éxito');
//             },
//             error: function(error) {
//                 // Maneja errores si ocurren durante la solicitud AJAX
//                 console.error('Error al enviar los datos', error);
//             }
//         });
//     });
// });

$(document).ready(function() {
    $('#enviarDatos').click(function() {
        // Obtén los valores de los contadores
        const victorias = simon.victorias;
        const derrotas = simon.derrotas;
        const rondasJugadas = simon.rondasJugadas;

        // Obtén el nombre de usuario
        const username = $('#usernameInput').val(); // Suponiendo que tengas un input con el ID 'usernameInput'

        // Crea un objeto con los datos
        const datos = {
                victorias: victorias,
                derrotas: derrotas,
                rondasJugadas: rondasJugadas,
                username: username // Agrega el nombre de usuario al objeto
        };

        // Realiza una solicitud AJAX para enviar los datos al archivo PHP
        $.ajax({
            type: 'POST',
            url: 'db.php', // Reemplaza con la URL de tu archivo PHP
            data: datos,
            success: function(response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Guardado',
                    text: 'Los datos de tu partida fueron guardados con exito',
                  })
            },
            error: function(error) {
                // Muestra una alerta si ocurre un error durante la solicitud AJAX
                alert('Error al enviar los datos: ' + error.responseText);
            }
        });
    });
});

const simon = new Simon(simonButtons, startButton, round);
simon.init();