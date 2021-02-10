/* Un Set es un objeto que va a coleccionar datos sin duplicados */

// Inicializamos el Set
const carrito = new Set();

// Agregar valores al Set (OJO: Set es Case sensitive)
carrito.add('Camisa');
carrito.add('Disco');
carrito.add('Radiograbador');
carrito.add('Camisa');

// Eliminar dato del Set
carrito.delete('Camisa');

// Comprobar si tiene un dato
console.log(carrito.has('Pato'));

// Saber el tamaño del Set
console.log(carrito.size);

// Eliminar todos los valores
// carrito.clear()

console.log(carrito);

/* IMPORTANTE: Los sets son iterables */
carrito.forEach( producto => console.log(producto) );