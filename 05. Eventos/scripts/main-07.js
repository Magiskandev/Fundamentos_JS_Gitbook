'use strict';

const buttonElement2 = document.querySelector('.boton-4');

const handleButtonClick2 = () => {
  const inception = 'Inception';
  const theButterFlyEffect = 'The butterfly effect';
  const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
  const blueVelvet = 'Blue velvet';
  const split = 'Split';
  
  document.querySelector('.movies-2').innerHTML = `
  <li class='p1'>${inception}</li>
  <li class='p2'>${theButterFlyEffect}</li>
  <li class='p3'>${eternalSunshineOfTheSM}</li>
  <li class='p4'>${blueVelvet}</li>
  <li class='p5'>${split}</li>
  `;

  const container = document.querySelector('.movies-2');

  function listClick(event) {
    const li = event.target.innerHTML;

    console.log(li);
  }

  container.addEventListener('click', listClick);
}

buttonElement2.addEventListener('click', handleButtonClick2);