'use strict'

console.clear();

// REFERENCIA TRANSPARENCIAL

/**
 * 
 */

// EVENTOS

var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () => {

    fPrueba();

});

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () => {

    console.log(fPruebaTres(fPruebaDos(2,2)));

});

// FUNCIONES
function fPrueba(){
    console.log("hola");
}

function fPruebaDos(n1, n2){
    return n1 + n2;
}

function fPruebaTres(num){
    return num * 2;
}