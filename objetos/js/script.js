// Creando objeto para las clases

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

// Clase "Objetos, constructores y this"

const nombre1 = "Federico",
      nombre2 = String("Federico");

/* if( nombre1 == nombre2 ){

    console.log("Si, son iguales");

}else{

    console.log("No, no son iguales");

} */

// Clase "Prototypes en Javascript"


// Crear un prototype

Cliente.prototype.tipoCliente = function(){

    let tipo;

    if( this.saldo > 100 ){
        tipo = "Gold";
    }else if( this.saldo > 500 ){
        tipo = "Platinum";
    }else{
        tipo = "Normal";
    }

    return tipo;

}

// Prototipo que imprime saldo y nombre

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo}, Tipo Cliente ${this.tipoCliente()}`;
}

// Clase heredar prototypes a otro objeto


// Banca para empresa
function Empresa(nombre, saldo, telefono, tipo){

    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;

}

const empresa = new Empresa("Udemy", 10000000, 01546348, "Education");

// Clase Object Create

const Client = {
    imprimirSaldo: function(){
        return `Hola ${this.nombre}! tu saldo es ${this.saldo}`;
    },
    retirarSaldo: function(retiro){
        return this.saldo -= retiro;
    }
}

const mary = Object.create(Client);

console.log(mary);