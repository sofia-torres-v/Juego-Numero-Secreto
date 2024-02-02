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
    console.log(numeroSecreto);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", "Asertaste el número");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
    }
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento("h1", "¡Juego del número secreto!");
asignarTextoElemento("p", "Indica un número del 1 al 10");
