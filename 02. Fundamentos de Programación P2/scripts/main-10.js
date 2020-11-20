'use strict';

// let edad = 60;
// let diasComun = 365;
// let diasBisiesto = 366;
// let horasDia = 24;

// let numeroBisiestos = edad / 4;
// let bisiestos = Math.trunc(numeroBisiestos);
// let numeroComunes = edad - bisiestos;
// console.log(bisiestos, numeroBisiestos, numeroComunes);

// let horasBisiesto = bisiestos * diasBisiesto;
// let horasComun = numeroComunes * diasComun;

// let totalHoras = horasBisiesto + horasComun;

let edad2 = parseInt(document.querySelector('.edad').innerHTML);

let dias2 = 365;
let horas2 = 24;
let totalHoras2 = edad2 * dias2 * horas2;

console.log(`Mi edad es ${edad2} y he vivido ${totalHoras2} horas.`);