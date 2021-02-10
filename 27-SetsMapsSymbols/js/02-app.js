/* Los WeakSets (Sets debiles en español) se comportan igual que un set, con la diferencia de que SOLO PUEDE ALMACENAR OBJETOS */

const weakset = new WeakSet();

const client = {
    name: "Pato",
    saldo: 100
};

// Agregar un dato
weakset.add(client);

// Eliminar un dato
weakset.delete(objeto)

// La propiedad size no existe
weakset.size // output: error

// Los weakset no se pueden iterar

console.log(weakset);