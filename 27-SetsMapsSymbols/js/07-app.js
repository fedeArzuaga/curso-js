function *crearGenerador() {

    yield 1;
    yield 'Jhon';
    yield 3+3;
    yield true;

}

const iterador = crearGenerador();

console.log(iterador);
console.log(iterador.next().value);
console.log(iterador.next().done);
console.log(iterador);