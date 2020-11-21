'use strict';

const container = document.querySelector('.notif');
const title = document.querySelector('.title-2');
const parag = document.querySelector('.parag');

if (container.classList.contains('success')) {
    title.innerHTML = `CORRECTO`;
    parag.innerHTML = `Los datos son correctos.`;
}

else if(container.classList.contains('error')) {
    title.innerHTML = `ERROR`;
    parag.innerHTML = `Ha surgido un error.`;
}

else if(container.classList.contains('warning')) {
    title.innerHTML = `AVISO`;
    parag.innerHTML = `Tenga cuidado.`;
}