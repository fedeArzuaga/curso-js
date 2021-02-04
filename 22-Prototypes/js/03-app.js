function Client(name, salary) {
    this.name = name;
    this.salary = salary;
}

Client.prototype.clientType = function() {
    console.log(this.salary);
}


// Instanciar
const peter = new Client('Peter', 5000);
peter.clientType();

console.log(peter);