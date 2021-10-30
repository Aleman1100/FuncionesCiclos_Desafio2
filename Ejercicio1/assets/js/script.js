//Se obtiene la ID del formulario para gestionar el evento y su desarrollo.
let form = document.getElementById("formulario");

//Le negamos el evento submit que tiene por defecto el formulario e invocamos a la funcion de limpieza de los errores siempre, para no tenemos todos los mensajes en pantalla.
form.addEventListener("submit", function (event){
    event.preventDefault();
    limpiarErrores();

    //Asignamos valor a cada caja del formulario, para empezar a validar.
    let textNombre = document.getElementById("nombre").value;
    let textAsunto = document.getElementById("asunto").value;
    let textMensaje = document.getElementById("mensaje").value;

    //Revisamos el balor booleano de las validaciones, que se ejecutan en la funcion validar.
    let resultado = validar(textNombre,textAsunto,textMensaje);
    
    //Si los 3 textos son validos, se inyecta el mensaje de exito en el envio de los datos.
    if(resultado == true) {
    exito();
    };
    });

    //Funcion limpieza de todos los mensajes, sea erroneos o correctos, para evitar que se muestren todos simultaneamente.
    function limpiarErrores() {
        document.querySelector(".resultado").innerHTML = "";
        document.querySelector(".errorNombre").innerHTML = "";
        document.querySelector(".errorAsunto").innerHTML = "";
        document.querySelector(".errorMensaje").innerHTML = "";
        };
        
    //Funcion para el mensaje de validacion exitosa.
    function exito() {
        document.querySelector(".resultado").innerHTML = "Mensaje enviado con exito";
        };
    
    //Proceso de validacion segun caracteres de cada caja de texto en el formulario.
    function validar(nombre,asunto,mensaje) {
        
        //Declaramos que el proceso es verdadero desde el inicio, previo a la revision de cada caja.
        let Validado = true;

        //Asignamos las limitacion de la caja a revisar, y procesamos el mensaje de error que debe mostrarse si falla y entregamos a la variable de validacion el valor falso.
        let validacionNombre = /[a-zA-Z]/gim;

        if (validacionNombre.test(nombre) == false) {
            document.querySelector(".errorNombre").innerHTML = "El nombre ingresado es invalido."
            Validado = false;
        }

        //Asignamos las limitacion de la caja a revisar, y procesamos el mensaje de error que debe mostrarse si falla y entregamos a la variable de validacion el valor falso.
        let validacionAsunto = /[a-zA-Z]/gim;

        if (validacionAsunto.test(asunto) == false) {
            document.querySelector(".errorAsunto").innerHTML = "El asunto ingresado es invalido."
            Validado = false;
        }

        //Asignamos las limitacion de la caja a revisar, y procesamos el mensaje de error que debe mostrarse si falla y entregamos a la variable de validacion el valor falso.
        let validacionMensaje = /[a-zA-Z]/gim;

        if (validacionMensaje.test(mensaje) == false) {
            document.querySelector(".errorMensaje").innerHTML = "El mensaje ingresado es invalido."
            Validado = false;
        }
            return Validado;
        }        