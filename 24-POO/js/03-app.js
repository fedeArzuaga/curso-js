class Client {

    constructor( name, salary ) {
        this.name = name;
        this.salary = salary;
    }

    mostrarInformacion() {
        return `${this.name}, tu saldo es de: ${this.salary}`;
    }

    // Las funciones y/o propiedades estáticas se caracterizan por ser utilizadas unicamente en la clase, y no en la instancia de la misma, a diferencias de las propiedades/funciones no estáticas.
    static bienvenida() {
        return `Bienvenido al cajero`;
    }

}

// Herencia con clases
class Bussines extends Client {
    constructor(name, salary, phone, category) {
        super(name, salary);
        this.phone = phone;
        this.category = category;
    }

    static bienvenida() { // Reescribir un metodo en la clase que hereda
        return `Bienvenido al cajero de empresas`;
    }

}

const jhon = new Client('Jhon', 3000);
const empresa = new Bussines('Stack overflow', 1000000, 092345332, 'Archive');

console.log(Bussines.bienvenida())