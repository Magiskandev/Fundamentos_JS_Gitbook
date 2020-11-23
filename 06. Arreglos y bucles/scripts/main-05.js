'use strict';

const input = document.querySelector('.input');
const boton1 = document.querySelector('.boton-1');

function printInput() {
    console.log(input);
    console.dir(input);
}

boton1.addEventListener('click', printInput);