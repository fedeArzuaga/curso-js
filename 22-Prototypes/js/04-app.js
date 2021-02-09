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

function Person( name, salary, phone ) {
    this.name = name;
    this.salary = salary;
    this.phone = phone;
}

const jhon = new Person('Jhon Doe', 2500, 59892345332);
console.log(jhon)