// Variables y selectores
const form = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector("#gastos ul");



// Eventos
eventsListeners();

function eventsListeners() {

    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    form.addEventListener('submit', agregarGasto);

}



// Classes

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto( gasto ) {
        this.gastos = [...this.gastos, gasto];
        console.log(this.gastos);
    }

}

class UI {

    insertarPresupuesto( cantidad ) {
        const { presupuesto, restante } = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta( mensaje, tipo ) {
        const div = document.createElement('div');
        div.classList.add('text-center', 'alert');

        if ( tipo === 'error' ) {
            div.classList.add('alert-danger');
        } else {
            div.classList.add('alert-success');
        }

        // Mensaje
        div.textContent = mensaje;

        // Insertar HTML
        document.querySelector('.primario').insertBefore( div, form );

        // Quitar del HTML
        setTimeout( () => {
            div.remove();
        }, 3000 )

    }

}

const ui = new UI();
let presupuesto;


// Funciones

function preguntarPresupuesto() {
    let presupuesto = parseFloat(prompt('Cual es tu presupuesto?'));

    if ( presupuesto === '' || presupuesto === null || isNaN(presupuesto) || presupuesto < 0 ) {
        window.location.reload();
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuesto);

    ui.insertarPresupuesto(presupuesto);


}

function agregarGasto(e) {
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    // Validar

    if ( nombre === '' || cantidad === '' ) {
        ui.imprimirAlerta( 'Ambos campos son obligatorios', 'error' );
        return;
    } else if ( cantidad <= 0 || isNaN(cantidad) ) {
        ui.imprimirAlerta( 'Cantidad no valida', 'error' );
        return;
    }

    // Generar un objeto gasto

    const gasto = {
        nombre,
        cantidad,
        id: Date.now()
    }

    console.log(presupuesto);

    presupuesto.nuevoGasto(gasto)

}