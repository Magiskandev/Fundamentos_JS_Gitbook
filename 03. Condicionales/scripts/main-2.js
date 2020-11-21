'use strict';

let partner = 'Alejandro';

if (partner === 'David' || partner === 'Santiago' || partner === 'Alejandro') {
    document.querySelector('.msg').innerHTML = `Bienvenido, ${partner}.`;
}

else if (partner !== 'David' || partner !== 'Santiago' || partner !== 'Alejandro') {
    document.querySelector('.msg').innerHTML = `Lo siento pero el usuario que has introducido no está registrado.`;
}