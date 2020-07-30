// This en explicit binding

function persona(el1, el2){
    console.log(`Hola soy ${this.name} y me gusta el ${el1} y ${el2}`);
}

const info = {
    name: "Fede",
    job: "Programmer"
}

const generos = ['Heavy Metal', 'Rock'];

// Explicit binding con call, cuando pasas im arreglo debes colocar todas las posiciones
persona.call(info, generos[0], generos[1]);

// Explicit binding con apply, si toma todo el arreglo completo
persona.apply(info, generos);

// Este hace lo mismo que call, pero crea una nueva funcion modificando la pasada.
const nuevaF = persona.bind(info, generos[0], generos[1]);
nuevaF()