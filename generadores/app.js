
/* Creando generadores */

// Las funciones que actuan como generadores devuelven un iterador con la propia sintaxis de javascript. Ya no tenemos que preocuparnos por crear nuestros propios iteradores. Solamente debemos tener en cuenta 3 aspectos

/*

* Debemos indicarla a la funcion generadora un asterisco antes de su nombre => *miFuncion
* Debemos establecer cada valor del iterador con la palabra reservada yield

*/

function *crearGenerador() {

    yield 1;
    yield 'Federico Arzuaga';
    yield 'Probando generadores';
    yield 3 + 3;
    yield true;

}

const iterator = crearGenerador();


function *nuevoGenerador( carrito ){
    
    for( let i = 0; i <= carrito.length; i++ ) {
        yield carrito[i];
    }

}

const carrito = ['Remera', 'Campera', 'Musculosa', 'Jersey', 'Buzo', 'Camisa'];

let iterador = nuevoGenerador(carrito);

console.log( iterador.next().value );
console.log( iterador.next().value );
console.log( iterador.next().value );
console.log( iterador.next().value );
console.log( iterador.next().value );
console.log( iterador.next().value );
console.log( iterador.next().value );