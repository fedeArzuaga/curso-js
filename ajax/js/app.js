document.getElementById("cargar").addEventListener("click", cargarDatos);

function cargarDatos(){

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {

        if( xhr.readyState == 4 || xhr.status == 200 ){
            document.getElementById("listado").innerHTML = `<h2>${xhr.responseText}</h2>`;
        }

    }

    xhr.open( 'GET', 'datos.txt', true );

    xhr.send();

}