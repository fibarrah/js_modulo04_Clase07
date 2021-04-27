'use strict'

console.clear();

// imperative vs declerative

/**
 * 
 * 
 * 
 */

// EVENTOS

var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () => {
    funcImperative();
})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () => {
    funcDeclerative();
})

// FUNCIONES

// Modo Imperative
function funcImperative(){
    for (let index = 0; index < 10; index++) {
        console.log(index);        
    }
}

// Modo Declerative
function funcDeclerative(){
    [1,2,3].forEach(item => console.log(item));
}