'use strict'

console.clear();

// FUNCIONES PURAS

/**
 * FP - 
 *      1.- Siempre debe de retornar el mismo valor que se le
 *          dio
 *      2.- Esta funcion no debe modificar nada fuera
 *          de si misma
 * 
 *  "NO SIDE EFFECTS" o "NO EFECTOS SECUNDARIOS"
 * 
 */

// Primer ejemplo

// VARIABLES GLOBALES
const array = [1,2,3];

// EVENTOS
var btn_prueba1 = document.querySelector("#btn_prueba1");
btn_prueba1.addEventListener('click', () => {

    console.log(primerPrueba(array));

})

var btn_prueba2 = document.querySelector("#btn_prueba2");
btn_prueba2.addEventListener('click', () => {

    console.clear();
    segundaPrueba(array);
    console.log("------------------------------------");
    console.log(array);

})

var btn_prueba3 = document.querySelector("#btn_prueba3");
btn_prueba3.addEventListener('click', () => {

    console.clear();
    console.log(tercerPrueba(array));
    console.log("------------------------------------");
    console.log(array);
})

var btn_prueba4 = document.querySelector("#btn_prueba4");
btn_prueba4.addEventListener('click', () => {

    console.clear();
    console.log(cuartaPrueba(array));
    console.log("------------------------------------");
    console.log(array);
})

// FUNCIONES
// input --> outpuy

// FUNCION CON EFECTOS SECUDARIOS
function primerPrueba(arr){
    arr.pop();
    return arr;
}

// CON EFECTOS SECUNDARIOS
function segundaPrueba(arr){
    arr.forEach(item => {
        arr.push(1);
    })
}

// FUNCION SIN EFECTOS SECUNDARIOS
function tercerPrueba(arr){
    const nuevaMatriz = [].concat(arr);
    nuevaMatriz.pop();
    return nuevaMatriz;
}

// FUNCION SIN EFECTOS SECUNDARIOS
function cuartaPrueba(arr){
    return arr.map(item => item * 2);
}

