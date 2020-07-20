class Comida {
    preparar() {
        console.log("Comida ya esta preparada")
    }
}

class Hamburguesa extends Comida {
    constructor() {
        console.log("Nueva hamburguesa creada")
        super()
    }

    ponerKetchup() {
        console.log("Le pusimos ketchup...")
    }
}

class Pizza extends Comida {
    constructor(){
        console.log("Nueva Pizza Creada")
        super()
        this.preparar();
    }

    ponerPiña() {
        console.log("La piña esta agregada");
    }

}

class CocinaFactory { 
    constructor(tipo) {
        switch (tipo) {
            case 'Pizza':
                return new Pizza();
                break;
            case 'Hamburguesa':
                return new Hamburguesa();
                break;
            default:
                return null;
                break;
        }
    }
}

const pizza = new CocinaFactory("Pizza");
const hambu = new CocinaFactory("Hamburguesa");
hambu.ponerKetchup();
pizza.ponerPiña();