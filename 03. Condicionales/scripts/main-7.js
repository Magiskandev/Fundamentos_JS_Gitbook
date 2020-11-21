'use strict';

const actual = 2020;
const periodo = 4;

if (actual % periodo == 0) {
    console.log(`Es el año bisiesto: ${actual}, el siguiente año bisiesto será: ${actual + periodo}.`);
    
}

else {
    console.log(`Es el año: ${actual}, El siguiente año bisiesto será: ${actual + (periodo - (actual % periodo))}.`);
}