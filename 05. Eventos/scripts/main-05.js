'use strict';

const elem = document.querySelector('.teacher--isra');
const elem2 = document.querySelector('.teacher--tuerto');
const elem3 = document.querySelector('.teacher--nasi');

const handleItems = (event) => {
    const el = event.currentTarget;
    
    el.classList.toggle('teacher--selected');
    const text = el.querySelector('.favorite');
    const content = text.innerHTML;
    
    if(content === 'Añadir') {
        text.innerHTML = 'Quitar';
    }
    
    else {
        text.innerHTML = 'Añadir';
    }
}
 
elem.addEventListener('click', handleItems);
elem2.addEventListener('click', handleItems);
elem3.addEventListener('click', handleItems);