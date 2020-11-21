'use strict';

function ticketIva(precio) {
    let res = `El precio sin IVA es: $ ${precio}, el IVA es: 2.1 y el total es: $ ${precio * 1.21}.`;
    return res;
}

console.log(ticketIva(10));
console.log(ticketIva(100));