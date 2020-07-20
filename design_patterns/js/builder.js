class Form {
    constructor() {
        this.campos = [];
    }

    agregarCampo(tipo, texto) {
        
        let campos = this.campos;
        let campo;

        switch(tipo){
            case 'text':
                campo = new InputText(texto);
                break;
            case 'email':
                campo = new InputEmail(texto);
                break;
            case 'button':
                campo = new Boton(texto);
                break;
            default:
                throw new Error(`Tipo de input no válido: ${tipo}`)
                break;
        }

        campos.push(campo);

    }

    obtenerFormulario() {

        let form = document.createElement('form'),
            campos = this.campos.length,
            campo;

        for( let i = 0; i < campos; i++ ) {

            campo = this.campos[i];
            form.appendChild( campo.crearElemento() );
            form.appendChild( document.createElement("br") );

        }

        return form;

    }

}

class Inputs {
    constructor(texto) {
        this.texto = texto;
    }
}

class InputText extends Inputs {
    constructor(texto) {
        super(texto);
    }

    crearElemento() {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', this.texto);
        return input;
    }
}

class InputEmail extends Inputs {
    constructor(texto) {
        super(texto);
    }

    crearElemento() {
        const input = document.createElement('input');
        input.setAttribute('type', 'email');
        input.setAttribute('placeholder', this.texto);
        return input;
    }
}

class Boton extends Inputs {
    constructor(texto) {
        super(texto);
    }

    crearElemento() {
        const input = document.createElement('input');
        input.setAttribute('type', 'submit');
        input.setAttribute('value', this.texto);
        return input;
    }
}

// Instanciar form

const form = new Form();
form.agregarCampo('text', 'Agrega tu nombre');
form.agregarCampo('email', 'Agrega un correo');
form.agregarCampo('button', 'Enviar formulario');

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#app").appendChild( form.obtenerFormulario() );
});

console.log(form)