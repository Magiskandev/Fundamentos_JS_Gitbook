'use strict';

let numPersonas = 9;
let totalCuenta = 128;
let chupitoSake = 2;

let valorIndividual = (totalCuenta - chupitoSake) / numPersonas;
let valorAna = valorIndividual + chupitoSake;

console.log(`
El valor a pagar para cada uno es de: ${valorIndividual}
El valor a pagar para Ana es de: ${valorAna}
`);