'use strict';

const geekGirl  = {
    nombre: 'Susana',
    edad: 24,
    profesion: 'periodista',
    run: () => console.log(`Estoy corriendo`),
    runAMarathon: (distance) => console.log(`Estoy corriendo un maraton de ${distance} kilometros.`)
}

console.log(geekGirl.run());
console.log(geekGirl.runAMarathon(50));