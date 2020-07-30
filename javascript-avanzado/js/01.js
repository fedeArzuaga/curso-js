function persona(nombre) {
    console.log(`Hola soy ${nombre}`);
}

// Implicit binding
const user = {
    name: "Jhon",
    age: 25,
    presentation() {
        console.log(`Hi! My name is ${this.name} and i have ${this.age} years old`);
    },
    mascota: {
        name: "Snoopy",
        age: 6,
        presentation() {
            console.log(`Hi! My name is ${this.name} and i have ${this.age} years old`);
        }
    }
}

user.presentation();
user.mascota.presentation();