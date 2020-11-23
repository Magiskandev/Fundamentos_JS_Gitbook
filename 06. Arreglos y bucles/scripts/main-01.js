'use strict';

const geekGirl1  = {
    nombre: 'Susana',
    edad: 24,
    profesion: 'periodista'
}

const girl1 = document.querySelector('.parrafo-1');
girl1.innerHTML = `Mi nombre es ${geekGirl1.nombre}, tengo ${geekGirl1.edad} años y soy ${geekGirl1.profesion}.`;


const geekGirl2  = {
    nombre: 'Rocío',
    edad: 25,
    profesion: 'actriz'
}

const girl2 = document.querySelector('.parrafo-2');
girl2.innerHTML = `Mi nombre es ${geekGirl2.nombre}, tengo ${geekGirl2.edad} años y soy ${geekGirl2.profesion}.`;