import { Cliente } from './clases.js';

export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }

    mostrarInfo() {
        return `
            Nombre del cliente: ${this.nombre},
            Ahorro: ${this.ahorro},
            Categoria: ${this.categoria}
        `;
    }
    
}