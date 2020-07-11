document.querySelector("#generar-nombre").addEventListener("submit", cargarNombres);

function cargarNombres(e){

    e.preventDefault();

    const data = {
        origen: e.target.origen.value,
        genero: e.target.genero.value,
        cantidad: e.target.numero.value
    }

    let url = '';
    url += "https://uinames.com/api/?";

    // Si hay origen, agregarlo a la url
    if( data.origen !== '' ){
        url += `region=${data.origen}&`;
    }

    // Si hay un genero agregarlo a la url
    if( data.genero !== '' ){
        url += `gender=${data.genero}&`;
    }

    // Si hay una cantidad agregarlo a la url
    if( data.cantidad !== '' ){
        url += `amount=${data.cantidad}&`;
    }

    // Conectar con ajax
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = function(){

        if( this.status === 200 ){

            console.log("Es correcto!");

        }

    }

    xhr.send();

}