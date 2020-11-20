'use strict';

const imgDefault = 'http://placehold.it/300x300';
let imgAvatar = '';
// let imgAvatar = 'http://www.fillmurray.com/300/300';

// let userImage = document.querySelector('.title').innerHTML;

// if (imguserImage) {
//     document.querySelector('.avatar').innerHTML = `<img src=${imgAvatar} alt='img'>`;
// }

// else {
//     document.querySelector('.avatar').innerHTML = `<img src=${imgDefault} alt='img'>`;
// }

document.querySelector('.avatar').innerHTML = `<img src=${imgAvatar || imgDefault} alt='img'>`;