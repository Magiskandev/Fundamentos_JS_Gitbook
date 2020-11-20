'use strict';

const paisita = 'Biviana María Agudelo Velez';

// document.querySelector('.paisita').innerHTML = paisita;
// document.querySelector('.paisita-2').innerHTML = paisita.length;


const largo = paisita.length;

document.querySelector('.paisota').innerHTML = `
El nombre de mi compañera es ${paisita}
y está compuesto por ${largo} caracteres.
`;