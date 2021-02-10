class Client {

    // Propiedades o metodos privados con #
    #name;

    constructor( name, salary ) {
        this.#name = name;
        this.salary = salary;
    }

    mostrarInformacion() {
        return `${this.#name}, tu saldo es de: ${this.salary}`;
    }

    getName() {
        return this.#name;
    }

    // Las funciones y/o propiedades estáticas se caracterizan por ser utilizadas unicamente en la clase, y no en la instancia de la misma, a diferencias de las propiedades/funciones no estáticas.
    static bienvenida() {
        return `Bienvenido al cajero`;
    }

}

const jhon = new Client('Jhon', 5000);

// Esto está mal
console.log(jhon.name) // undefined

// Esto está bien
console.log(jhon.getName());