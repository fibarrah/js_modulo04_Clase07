'use strict'

console.clear();

// immutability

/**
 */

const obj = {nombre: 'Fernando'};

// EVENTOS
var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{
    // ESTO NO SE DEBE DE HACER, POR QUE SE MUTA EL
    // OBJETO ANTES DE HACER ALGUNA OPERACION CON EL
    obj.nombre = 'Otro Nombre';
    console.log(obj);

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () =>{

    console.log(actualizarNombre(obj));
    console.log("---------------------")
    // CLONAR EL OBJETO YA CLONADO
    const nuevoObj = actualizarNombre(obj);
    console.log(obj, nuevoObj);


})

// FUNCIONES

function clonarObjeto(){
    return{...obj};
}

function actualizarNombre(obj){
    const obj2 = clonarObjeto(obj);
    obj2.nombre = "Otro Nombre -";
    return obj2;
}