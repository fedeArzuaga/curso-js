const sym = Symbol('1');
const sym2 = Symbol('1');

// console.log( sym === sym2 );

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido
persona[nombre] = 'Jhon'; // Los Symbols en objetos se pueden agregar únicamente con array syntax object[property]
persona[apellido] = 'Doe';
persona.salary = 5000;

console.log(persona);

// Las propiedades que utilizan un Symbol NO SON ITERABLES
for( let i in persona ) {
    console.log(i);
}

// Definir una descripción de un Symbol
const client = Symbol('Nombre del cliente');

const clientName = 'Peter';