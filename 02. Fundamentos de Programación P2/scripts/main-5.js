'use strict';

let edad = 34;
let diasComun = 365;
// let diasBisiesto = 366;
let horasDia = 24;

// let numeroBisiestos = edad / 4;
// let bisiestos = Math.trunc(numeroBisiestos);
// let numeroComunes = edad - bisiestos;
// console.log(bisiestos, numeroBisiestos, numeroComunes);

// let horasBisiesto = bisiestos * diasBisiesto;
// let horasComun = numeroComunes * diasComun;

// let totalHoras = horasBisiesto + horasComun;
// let totalHoras = (edad * diasComun * horasDia) + (bisiestos * horasDia);
let totalHoras = (edad * diasComun * horasDia);

// let edad = 34;
// let dias = 365;
// let horas = 24;
// let totalHoras = edad * dias * horas;

console.log(`Mi edad es ${edad} y he vivido ${totalHoras} horas.`);