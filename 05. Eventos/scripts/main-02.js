'use strict';

// elemento de HTML
const button2 = document.querySelector('.boton-2');

// handler
const showConsole = () => {
    let imprimir = document.querySelector('.entrada').value;
    console.log(imprimir);
}

// listener sobre el elemento, con tipo de evento y handler
button2.addEventListener('click', showConsole);