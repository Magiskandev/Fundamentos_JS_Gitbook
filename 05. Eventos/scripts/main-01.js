'use strict';

// elemento de HTML
const button = document.querySelector('.boton');

// handler
const showAlert = () => document.querySelector('.yo').innerHTML = `Mi primer click, ¡ole yo y la mujer que me parió!`;

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', showAlert);