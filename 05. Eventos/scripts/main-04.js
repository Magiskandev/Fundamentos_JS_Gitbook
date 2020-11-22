'use strict';

const buttonElement = document.querySelector('.boton-3');

const handleButtonClick = () => {
  const inception = 'Inception';
  const theButterFlyEffect = 'The butterfly effect';
  const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
  const blueVelvet = 'Blue velvet';
  const split = 'Split';
  
  document.querySelector('.movies').innerHTML = `
  <li class='p1'>${inception}</li>
  <li class='p2'>${theButterFlyEffect}</li>
  <li class='p3'>${eternalSunshineOfTheSM}</li>
  <li class='p4'>${blueVelvet}</li>
  <li class='p5'>${split}</li>
  `;

  const item1 = document.querySelector('.p1');
  const item2 = document.querySelector('.p2');
  const item3 = document.querySelector('.p3');
  const item4 = document.querySelector('.p4');
  const item5 = document.querySelector('.p5');

  function listClick(event) {
    const li = event.currentTarget.innerHTML;

    console.log(li);
  }

  item1.addEventListener('click', listClick);
  item2.addEventListener('click', listClick);
  item3.addEventListener('click', listClick);
  item4.addEventListener('click', listClick);
  item5.addEventListener('click', listClick);
}

buttonElement.addEventListener('click', handleButtonClick);