function Client(name, salary) {
    this.name = name;
    this.salary = salary;
}

Client.prototype.clientType = function() {
    let type;

    if( this.salary > 10000 ) {
        type = 'Gold'
    } else if ( this.salary > 5000 ) {
        type = 'Platinum';
    } else {
        type = 'Normal';
    }

    return type;

}

Client.prototype.nameClientSalary = function() {

    return `Nombre: ${this.name}, Saldo: ${this.salary}, Tipo Cliente: ${this.clientType()}`;

}


// Instanciar
const peter = new Client('Peter', 7500);
console.log(peter.clientType());
console.log(peter.nameClientSalary());

console.log(peter);