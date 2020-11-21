'use strict';

const buttonElement = document.querySelector('.button-2');

function handleButtonClick(event) {
  console.log(event);
}

buttonElement.addEventListener('click', handleButtonClick);