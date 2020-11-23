'use strict';

let doc = document.querySelector('body');

const changeBackgroundColor = (event) => {
    if(event.key === 'r' || event.key === 'R') {
        doc.classList.remove('violet');
        doc.classList.add('red');        
    }

    else if (event.key === 'm' || event.key === 'M') {
        doc.classList.remove('add');
        doc.classList.add('violet');
    }
}

doc.addEventListener('keydown', changeBackgroundColor);