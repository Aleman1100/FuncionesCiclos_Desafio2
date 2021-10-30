//Declara la constante caja, para cambiar el color segun boton.
const caja = document.getElementById("caja");

//Funciones para cada boton y los colores que correspondan al evento.
let btn1 = document.getElementById("btn-1");
btn1.addEventListener('click', function(){
    caja.style.backgroundColor = "#e53e3e";
    ;
});


let btn2 = document.getElementById("btn-2");
btn2.addEventListener('click', function(){
    caja.style.backgroundColor = "#dd6b20";
    ;
});


let btn3 = document.getElementById("btn-3");
btn3.addEventListener('click', function(){
    caja.style.backgroundColor = "#faf089";
    ;
});


let btn4 = document.getElementById("btn-4");
btn4.addEventListener('click', function(){
    caja.style.backgroundColor = "#48bb78";
    ;
});


let btn5 = document.getElementById("btn-5");
btn5.addEventListener('click', function(){
    caja.style.backgroundColor = "#81e6d9";
    ;
});


let btn6 = document.getElementById("btn-6");
btn6.addEventListener('click', function(){
    caja.style.backgroundColor = "#d53f8c";
    ;
});