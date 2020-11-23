'use strict';

'use strict';

const geekGirl3  = {
    nombre: 'María',
    edad: 34,
    profesion: 'periodista',
    showBio() {
        alert(`Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
    }
}

console.log(geekGirl3.showBio());

const geekGirl4  = {
    nombre: 'Rocío',
    edad: 25,
    profesion: 'actriz',
    showBio() {
        alert(`Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
    }
}

console.log(geekGirl4.showBio());