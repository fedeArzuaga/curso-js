// Callback en forEach

const ciudades = ["Londres","New York","Madrid","Paris","Viena"];

ciudades.forEach(function(ciudad){
    console.log(ciudad);
});

// Se agrega un nuevo pais despues de 2 segundos
function nuevoPais(pais, callback){
    setTimeout(function(){
        paises.push(pais);
        callback();
    }, 2000);
}

const paises = ["Francia", "Italia", "Peru", "Venezuela", "Holanda"];
// Paises se muestran despues de un segundo
function mostrarPaises(){

    setTimeout( function(){
        let html = '';
        paises.forEach(function(pais){
            html += `<li>${pais}</li>`;
        });
        document.getElementById("app").innerHTML = html;
    }, 1000);

}
nuevoPais("Alemania", mostrarPaises);

mostrarPaises();