// Creando clases

class Client{
    constructor(name, surname, money){
        this.name = name;
        this.surname = surname;
        this.money = money;
    }

    imprimirSaldo(){
        return `Hola ${this.name}! tu saldo es de: ${this.money}`;
    }

    clientType(){

        let type;

        if( this.money > 10000){
            type = "Gold";
        }else if( this.money > 5000 ){
            type = "Platinum";
        }else{
            type = "Normal";
        }

        return type;

    }

    retirarSaldo(retiro){
        return this.money -= retiro;
    }

}

class Bussines extends Client{
    constructor(name, money, phone, type){
        super(name, money);
        this.phone = phone;
        this.type = type;
    }
}

const maria = new Client("Maria", "Perez", 10000);
console.log(maria);

const empresa = new Bussines("Empresa1", 10000, 548424, "Construction");
console.log(empresa);