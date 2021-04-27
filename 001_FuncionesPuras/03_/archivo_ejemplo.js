'use strict'

console.clear();

// IDEMPOTENCE

/**
 * 
 * Borrar un usuario de una base de datos
 * 
 */

// EVENTOS

var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () => {

    console.log(noEsBueno());

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () => {

    console.log(unPocoMejor(5));

})

// FUNCIONES

function noEsBueno(){
    return Math.random();
}

function unPocoMejor(num){
    return(num);
}