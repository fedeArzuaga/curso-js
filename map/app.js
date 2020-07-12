let cliente = new Map();

cliente.set('name', 'Federico');
cliente.set('clientType', 'Silver');
cliente.set('mount', 3000);

// Acceder a valores
// console.log( cliente.get('name') );

// Metodos para los maps

//Tamaño del map
console.log(cliente.size)

// Comprobar si existe un elemento
console.log(cliente.has('name'));

// Borrar elemento del map
cliente.delete('name');

// Limpiar todo el map
cliente.clear()

console.log(cliente);