'use strict';

const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

// const lista = `
// <li>${firstDogName}<br><img src='${firstDogImage}'></li>
// <li>${secondDogName}<br><img src='${secondDogImage}'></li>
// <li>${thirdDogName}<br><img src='${thirdDogImage}'></li>
// `;

// document.querySelector('ul').innerHTML = lista;

document.querySelector('.item-1').innerHTML = `${firstDogName}`;
document.querySelector('.img-1').innerHTML = `<img src='${firstDogImage}'>`;
document.querySelector('.item-2').innerHTML = `${secondDogName}`;
document.querySelector('.img-2').innerHTML = `<img src='${secondDogImage}'>`;
document.querySelector('.item-3').innerHTML = `${thirdDogName}`;
document.querySelector('.img-3').innerHTML = `<img src='${thirdDogImage}'>`;


// const lista = `
// <li>${firstDogName}<br><img src=${firstDogImage}></li>
// <li>${secondDogName}<br><img src=${secondDogImage}></li>
// <li>${thirdDogName}<br><img src=${thirdDogImage}></li>
// `;

// document.querySelector('ul').innerHTML = lista;