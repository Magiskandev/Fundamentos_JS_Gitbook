'use strict';

let edadPerruna = 8;

if (edadPerruna > 0) {
    if (edadPerruna === 1) {
        console.log(`La edad de tu can en años humanos es: 15.`);
        document.querySelector('.can').innerHTML = `La edad de tu can en años humanos es: 15.`;
    }

    else if (edadPerruna === 2) {
        console.log(`La edad de tu can en años humanos es: ${15 + 9}.`);
        document.querySelector('.can').innerHTML = `La edad de tu can en años humanos es: ${15 + 9}.`;
    }

    else {
        console.log(`La edad de tu can en años humanos es: ${(24 + (edadPerruna - 2) * 5)}.`);
        document.querySelector('.can').innerHTML = `La edad de tu can en años humanos es: ${(24 + (edadPerruna - 2) * 5)}.`;
    }
}

else {
    console.log(`La edad es inválida.`);
    document.querySelector('.can').innerHTML = `La edad es inválida.`;
}