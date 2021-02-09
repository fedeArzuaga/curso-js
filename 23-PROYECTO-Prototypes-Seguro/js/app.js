// Constructores

function Seguro( marca, year, tipo ) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function() {

    /*
        1 = Americano 1.15
        2 = Americano 1.05
        3 = Americano 1.35
    */

    let cantidad;
    const base = 2000;

    switch( this.marca ) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:

            break;
    }

    // leer el año
    const diferencia = new Date().getFullYear() - this.year;
    cantidad -= ((diferencia *3) * cantidad) / 100;

    // Cada año se reduce a un 3%

    /* Si el seguro es basico, se multiplica por un 30% mas
    
    Si el seguro es completa, se multiplica por un 50% mas */

    if ( this.tipo ) {

        cantidad *= 1.30;

    } else {

        cantidad *= 1.50;

    }

    return cantidad;

}

function UI() {}

UI.prototype.llenarOpciones = () => {

    const max = new Date().getFullYear(),
          min = max - 20;

    const selectYear = document.querySelector('#year');

    for ( let i = max; i > min; i-- ) {

        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);

    }

}

UI.prototype.mostrarMensaje = ( mensaje, tipo ) => {

    const div = document.createElement('div');

    if ( tipo === 'error' ) {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    const form = document.querySelector('#cotizar-seguro');
    form.insertBefore(div, document.querySelector('#resultado'));

    setTimeout( () => {
        div.remove();
    }, 3000)

}

UI.prototype.mostrarResultado = (total, seguro) => {

    // Crear resutlado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    let marca;

    switch( seguro.marca ) {
        case '1':
            marca = 'Americano';
            break;
        case '2':
            marca = 'Asiatico';
            break;
        case '3':
            marca = 'Europeo';
            break;
        default:
            break;
    }

    div.innerHTML = `
        <p class="header">Tu Resumen</p>
        <p class="font-bold">Marca: <span class="font-normal">${marca}</span></p>
        <p class="font-bold">Año: <span class="font-normal">${seguro.year}</span></p>
        <p class="font-bold">Total: <span class="font-normal capitalize">${seguro.tipo}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
    `;

    const resutladoDiv = document.querySelector('#resultado');
    

    // Mostrar spinner

    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout( () => {
        spinner.style.display = 'none';
        resutladoDiv.appendChild(div);
    }, 3000 );

}

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {

    // Llenar opciones con los años
    ui.llenarOpciones();

});

eventListeners();
function eventListeners() {

    const form = document.querySelector('#cotizar-seguro');
    form.addEventListener('submit', cotizarSeguro);

}

function cotizarSeguro( e ) {
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    // Leer el año seleccionado
    const year = document.querySelector('#year').value;

    // Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if ( marca === '' || year === '' || tipo === '' ) {
        
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
        
    } else {

        // Ocultar cotizaciones previas
        const resultados = document.querySelector('#resultado div');

        if( resultados ) {
            resultados.remove();
        }

        ui.mostrarMensaje('Cotizando...', 'exito');

        // Instanciar el seguro
        const seguro = new Seguro(marca, year, tipo);

        // Utilizar el prototype para cotizar
        const total = seguro.cotizarSeguro();

        ui.mostrarResultado(total, seguro)

    }
    
}