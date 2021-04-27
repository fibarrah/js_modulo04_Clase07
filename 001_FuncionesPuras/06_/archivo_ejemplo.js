'use strict'

console.clear();

// High Order Function

/**
 * 
 *  HOF
 *  
 *  Simplemente es una funcion que tiene uan de estas dos cosas:
 *  1.- Toma una o mas funciones como argumentos
 *  2.- regresa una funcion como resultado o tambien
 *      llamada callback
 *  
 * 
 */

// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () => {

    // HOF
    //const hof1 = () => () => 5;
    //console.log(hof1()());

    const hof2 = (fn) => fn(5);
    console.log(hof2(function nueva(x){return x;}));

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () => {

    const closure = function(){
        let contador = 0;
        return function incremento(){
            contador++;
            return contador;
        }
    } 

    const fnIncremento = closure();
    console.log(fnIncremento());

    console.log(fnIncremento());
    console.log(fnIncremento());
    console.log(fnIncremento());

})

// FUNCIONES