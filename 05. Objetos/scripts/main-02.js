'use strict';

const geekGirl  = {
    nombre: 'Susana',
    edad: 24,
    profesion: 'periodista',
    run: () => console.log(`Estoy corriendo`),
    runAMarathon: (distance) => console.log(`Estoy corriendo un maraton de ${distance} kilometros.`)
}

geekGirl.run();
geekGirl.runAMarathon(50);