// Cotizador Constructor

function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = (seguro) => {
    
    /*
    
    1 = Americano 1.15
    2 = Asiatico 1.05
    3 = Europeo 1.35
    
    */  

    let cantidad;
    const base = 2000;

    switch(seguro.marca){
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break; 
    }

    // Leer el año
    const diferencia = new Date().getFullYear() - seguro.anio;

    // Cada año de diferencia reducimos 3% el seguro
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /*
        Si el seguro es básico se multiplica por 30% más
        Si el seguro es completo se multiplica por 50% más
    */

    if( seguro.tipo === 'basico' ){
        cantidad *= 1.30;
    }else{
        cantidad *= 1.50;
    }

    return Math.round(cantidad, -2);

};


// Todo lo que se muestra
function Interfaz(){}

Interfaz.prototype.mostrarError = (mensaje, tipo) => {
    
    const div = document.createElement("div");

    if( tipo === 'error' ){
        div.classList.add("mensaje","error");
    }else{
        div.classList.add("mensaje","correcto");
    }

    div.innerHTML = `${mensaje}`;
    form.insertBefore( div, document.querySelector('.form-group') );

    setTimeout( () => {
        document.querySelector('.mensaje').remove();
    }, 3000);

};

// Imprime los resultados de la cotizacion
Interfaz.prototype.mostrarResultado = (seguro, total) => {

    const resultado = document.getElementById("resultado");
    let marca;

    console.log(seguro);

    switch(seguro.marca){
        case '1':
            marca = 'Americano';
            break;
        case '2':
            marca = 'Asiatico';
            break;
        case '3':
            marca = 'Europero';
            break;
    }

    // Crear un div
    const div = document.createElement("div");
    div.innerHTML = `
        <p>Tu Resumen:</p>
        <p>Marca: ${marca}</p>
        <p>Año: ${seguro.anio}</p>
        <p>Tipo: ${seguro.tipo}</p>
        <p>Total: $ ${total}</p>
    `
    resultado.appendChild(div);

};

// EventListeners
const form = document.getElementById("cotizar-seguro");
form.addEventListener("submit", (e) => {

    e.preventDefault();

    // Select de marca
    const marca = document.getElementById("marca"),
          marcaSeleccionada = marca.options[marca.selectedIndex].value;

    // Select de anio
    const anio = document.getElementById("anio"),
          anioSeleccionado = anio.options[anio.selectedIndex].value;

    // Radio buttons de tipo
    const tipo = document.querySelector("input[name='tipo']:checked").value;

    // Crear instancia de interfaz
    const interfaz = new Interfaz();

    if( marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '' ){

        interfaz.mostrarError("Faltan datos, revisa el formulario y prueba de nuevo", "error");

    }else{

        // Todo correcto
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);

        // Cotizar el seguro
        const cantidad = seguro.cotizarSeguro(seguro);

        // Mostrar resultado
        interfaz.mostrarResultado(seguro, cantidad);

    }

} );

const max = new Date().getFullYear(),
      min = max - 20,
      selectAnios = document.getElementById("anio");

for( let i = max; i >= min; i-- ){
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}