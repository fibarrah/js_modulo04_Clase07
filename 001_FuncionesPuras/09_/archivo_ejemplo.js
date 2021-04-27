'use strict'

console.clear();

// Momoization

/**
 *  
 */

// VARIABLE GLOBAL
var cache = {};

// EVENTOS

var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    console.log(agregar80(5));
    console.log(agregar80(5));
    console.log(agregar80(5));
    console.log(agregar80(5));
})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () =>{

    console.log('1.-',agregar80Cache(5));
    console.log('2.-',agregar80Cache(6));
})


// FUNCIONES

function agregar80(n){
    console.log('Proceso de mucho tiempo');
    return n + 80;
}

function agregar80Cache(n){

    if(n in cache){
        return cache[n];
    }else{
        console.log('Proceso de mucho tiempo');
        cache[n] = n + 80;
        return cache[n];
    }

}