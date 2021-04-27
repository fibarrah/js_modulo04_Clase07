'use strict'

console.clear();

// Partial Application

/**
 *  
 */

// EVENTOS

var btn_primerEjemplo = document.querySelector("#btn_ejemplo1");
btn_primerEjemplo.addEventListener('click', () => {

    const multiplicar = (a,b,c) => a * b * c;
    const currMultiplicar = (a) => (b) => (c) => a*b*c;
    console.log(currMultiplicar(2)(2)(2));

});

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () => {

    const multiplicar = (a,b,c) => a * b * c;
    const partialMultiplicarPor5 =  multiplicar.bind(null,5);
    console.log(partialMultiplicarPor5(2,2));


});
