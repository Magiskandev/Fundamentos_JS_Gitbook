'use strict';

const button = document.querySelector('.boton');

function printEventObject(e) {
    console.log(e);
}

button.addEventListener('click', printEventObject);