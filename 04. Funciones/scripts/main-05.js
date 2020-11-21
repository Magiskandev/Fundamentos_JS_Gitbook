'use strict';

 const calculateBoxModel2 = (type, widthContent, padding, border) => {
    let box;

    if (type) {
        box = widthContent - (padding * 2) - (border * 2);
    }
    
    else {
        box = widthContent + (padding * 2) + (border * 2);
    }

    return box;
}



console.log(calculateBoxModel(1, 100, 10, 1));
console.log(calculateBoxModel(0, 100, 10, 1));