// Window binding

function getCar() {
    console.log(`Mi auto es color ${this.color}`);
}

const color = 'Negro'; // Undefined
window.color = 'Azul'; // Azul

getCar()