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

const jhon = new Client('Jhon', 3000);
console.log(jhon.mostrarInformacion());
console.log( Client.bienvenida() )