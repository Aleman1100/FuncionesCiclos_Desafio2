const suma = document.getElementById('btn-sumar');
const resta = document.getElementById('btn-restar');

suma.addEventListener('click', function(){
    let num1 = parseInt(document.getElementById("valor1").value);
    let num2 = parseInt(document.getElementById("valor2").value);
    resultado = num1 + num2;

    document.querySelector(".resultado").innerHTML=`${resultado}`
});

resta.addEventListener('click', function(){
    let num1 = parseInt(document.getElementById("valor1").value);
    let num2 = parseInt(document.getElementById("valor2").value);
    resultado = num1 - num2;

    if (resultado < 0){
        document.querySelector(".resultado").innerHTML = "0";
    } else {
        document.querySelector(".resultado").innerHTML=`${resultado}`
    }
});