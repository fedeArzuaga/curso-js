/* Los MAPS son objetos que almacena clave, valor. tanto la clave como el valor puede ser CUALQUIER tipo de dato */

const client = new Map();

// Guardar datos con .set (Si usamos la misma key dos veces, reescribe el ultimo valor agregado)
client.set('name', 'Jhon');
client.set('type', 'Premium');
client.set('salary', '1500');
client.set(true, true);
client.set([], true);

// Saber el tamaño del objeto
console.log(client.size);

// Comprobar valores
client.has('salary');

// Obtener valores
client.get('salary')

// Eliminar valores
client.delete(true);

// Eliminar todos los elementos
// client.clear();

client.forEach( (dato, index) => console.log(dato, index) );

console.log(client);