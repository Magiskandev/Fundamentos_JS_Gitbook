'use strict';

let partner = 'David';

if (partner === ('David' || 'Santiago' || 'Alejandro')) {
    document.querySelector('.msg').innerHTML = `Bienvenido, ${partner}.`;
}

else if (partner !== ('David' || 'Santiago' || 'Alejandro')) {
    document.querySelector('.msg').innerHTML = `Lo siento pero el usuario que has introducido no está registrado.`;
}