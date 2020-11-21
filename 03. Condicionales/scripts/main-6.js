'use strict';

const container2 = document.querySelector('.notif-2');
const title2 = document.querySelector('.title-3');
const parag2 = document.querySelector('.parag-2');

container2.classList.contains('success')
?  title2.innerHTML = `CORRECTO` parag2.innerHTML = `Los datos son correctos.`
: container2.classList.contains('error')
? title2.innerHTML = `ERROR` parag2.innerHTML = `Ha surgido un error.`
: container2.classList.contains('warning')
? title2.innerHTML = `AVISO` parag2.innerHTML = `Tenga cuidado.`