const producto = {
    idProduct: 10
}

const weakMap = new WeakMap();

weakMap.set(producto, 'Monitor');

console.log(weakMap.has(producto));
console.log(weakMap.get(producto));

/*

IMPORTANTE:

Al igual que los WeakSets, los WeakMaps no son iterables y tampoco aceptan otro tipo de dato que no sea un objeto. Tampoco se le puede conocer el tamaño con .size

*/