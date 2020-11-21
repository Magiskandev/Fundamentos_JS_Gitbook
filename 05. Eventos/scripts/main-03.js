'use strict';

// elemento de HTML
const parag = document.querySelector('.parag-1');

// handler
const showParag = () => document.querySelector('.parag-2').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt ut cumque corporis, illum molestiae temporibus rerum enim, voluptate quis, explicabo quibusdam fugiat pariatur aut. Alias quaerat et non id.';

// listener sobre el elemento, con tipo de evento y handler
parag.addEventListener('mouseover', showParag);