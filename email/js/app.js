// Variables
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar")


// Event Listener
function eventListener(){

    // Inicio de la aplicacion
    document.addEventListener("DOMContentLoaded", inicioApp);

    // Campos del formulario
    email.addEventListener("blur", validarCampo);
    asunto.addEventListener("blur", validarCampo);
    mensaje.addEventListener("blur", validarCampo);
    btnEnviar.addEventListener("click", envairEmail);

}

eventListener();


// Funciones
function inicioApp(){

    btnEnviar.disabled = true;

}

function validarCampo(){

    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);
    console.log("dentro del input");

    if( this.type === "email" ){
        validarEmail(this);
    }

    if( email.value !== '' && asunto.value !== '' && mensaje.value !== '' ){

        if( document.querySelectorAll(".error").length === 0 ){
            btnEnviar.disabled = false;
        }

    }else{

        btnEnviar.disabled = true;

    }

}

function envairEmail(e){

    e.preventDefault();

    const spinner = document.querySelector("#spinner");
    spinner.style.display = "block";

    const enviado = document.createElement("img");
    enviado.src = "img/mail.gif";
    enviado.style.display = "block";

    setTimeout( () => {
        spinner.style.display = "none";
        document.querySelector("#loaders").appendChild(enviado);

        setTimeout( () => {
            enviado.remove();
            document.querySelector("#enviar-mail").reset();
        }, 3000);

    }, 3000);

}

function validarLongitud(campo){

    if( campo.value.length >  0 ){

        campo.style.borderBottomColor = "green";
        campo.classList.remove("error");

    }else{

        campo.style.borderBottomColor = "red";
        campo.classList.add("error");

    }

}

function validarEmail(campo){

    const mensaje = campo.value;

    if( mensaje.indexOf('@') !== -1 ){
        campo.style.borderBottomColor = "green";
        campo.classList.remove("error");
    }else{
        campo.style.borderBottomColor = "red";
        campo.classList.add("error");
    }

}