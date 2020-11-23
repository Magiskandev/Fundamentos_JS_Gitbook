'use strict';

const btn = document.querySelector('.button-mood');

function randomNumber() {
    const random = Math.trunc(Math.random(100) * 100);
    
    return random;
}

function setBkgColor(random) {
    if (random % 2 === 0) {
        const container = document.querySelector('#mood');
        container.classList.remove('yellow');
        container.classList.add('orange');
    }
    
    else {
        const container = document.querySelector('#mood');
        container.classList.remove('orange');
        container.classList.add('yellow');
    }
}

function changeMood() {
    const selectMood = document.querySelector('#select-mood');
    // const moodValue = selectMood.value;
    const print = document.querySelector('.print-mood');
    
    if (selectMood.value === 'happy') {
        const sad = document.querySelector('.opt-mood-1');
        
        print.innerHTML = sad.innerHTML;

        const alea = randomNumber();
        setBkgColor(alea);
        console.log(alea);
    }
    
    else {
        const sad = document.querySelector('.opt-mood-2');
        
        print.innerHTML = sad.innerHTML;

        const alea = randomNumber();
        setBkgColor(alea);
        console.log(alea);
    }
}

btn.addEventListener('click', changeMood);