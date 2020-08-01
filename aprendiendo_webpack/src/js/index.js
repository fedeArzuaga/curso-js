import '../scss/style.scss';

class Client {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

const client = new Client();
console.log(client)