// Exportar una clase

export class Cliente {

    constructor(nombre, ahorro) {

        this.nombre = nombre;
        this.ahorro = ahorro;

    }

    mostrarInfo() {
        return `
            <p><b>Nombre del cliente:</b> ${this.nombre}</p>
            <p><b>Ahorro:</b> ${this.ahorro}</p>
        `;
    }

}