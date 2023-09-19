<?php include('./includes/header.php') ?>

<!-- Agrega esta alerta en tu página HTML -->
<div class="alert alert-danger" id="usernameExistsAlert" style="display: none;">
  El nombre de usuario ya existe. Por favor, elige otro nombre de usuario.
</div>


<div class="container mt-5">
    <div class="row justify-content-center align-items-stretch">
            <div class="col-md-6">
                <div class="card  shadow" data-aos="zoom-in" data-aos-duration="1500">
                    <div class="card-header text-center">
                        Partida actual
                    </div>
                    <div class="card-body text-center">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" id="usernameInput">
                            <button class="btn btn-outline-success" id="submitButton">Guardar</button>
                        </div>
                        <p>Total de Rondas Jugadas: <span id="contadorRondas">0</span></p>
                        <p>Victorias: <span id="contadorVictorias">0</span></p>
                        <p>Derrotas: <span id="contadorDerrotas">0</span></p>
                        <button id="enviarDatos" class="btn btn-primary">Guardar partida</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    <div class="container text-center  mb-5">
        <div class="row mb-5">
            <div class="col-md-6 offset-md-3">
                <div class="simon">
                    <button id="startButton" class="btn btn-secondary shadow" data-aos="fade-down"
                    data-aos-duration="3000">start</button>

                    <div class="title">‎ ‎ ‎ </div>

                    <div class="buttonContainer" data-aos="zoom-in">
                        <div class="shadow square red" data-aos="fade-down-right" data-aos-duration="1500" ></div>
                        <div class="shadow square yellow" data-aos="fade-down-left" data-aos-duration="1500" ></div>
                        <div class="shadow square blue" data-aos="fade-up-right" data-aos-duration="1500" ></div>
                        <div class="shadow square green" data-aos="fade-up-left" data-aos-duration="1500" ></div>
                    </div>
                    <div id="round" class="mt-3"></div>
                </div>
            </div>
        </div>
    </div>
    
<?php include('./includes/footer.php') ?>
