'use strict'

console.clear();

// currying

/**
 *  
 */

// EVENTOS

var btn_primerEjemplo = document.querySelector("#btn_ejemplo1");
btn_primerEjemplo.addEventListener('click', () => {

    const multiplicar = (a,b) => a * b;
    console.log(multiplicar(3,3));

});

var btn_segundoEjemplo = document.querySelector("#btn_ejemplo2");
btn_segundoEjemplo.addEventListener('click', () => {

    const curryingMulti = (a) => (b) => a * b;
    console.log(curryingMulti(5)(5));
    console.log("-----------------------");
    const curryingMultiPor5 = curryingMulti(5);
    console.log(curryingMultiPor5(2));


});

