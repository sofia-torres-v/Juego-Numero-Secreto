let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(
        document.getElementById("valorUsuario").value
    );
    console.log(numeroDeUsuario);
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento("h1", "¡Juego del número secreto!");
asignarTextoElemento("h2", "Indica un número del 1 al 10");
