function ConstructorSitios() {
    this.crearElemento = function( texto, tipo ) {

        let html;

        switch (tipo) {
            case 'input':
                html = new InputHTML(texto);
                break;
            case 'img':
                html = new ImagenHTML(texto);
                break;
            case 'h1':
                html = new HeadingHTML(texto);
                break;
            case 'p':
                html = new ParrafoHTML(texto);
                break;
            default:
                console.log("Pasame un tipo!!!!");
                break;
        }

        html.tipo = tipo;

        html.mostrar = function() {
            
            const elemento = document.createElement(this.tipo);

            switch (tipo) {
                case 'input':
                    elemento.setAttribute('placeholder', this.texto);
                    break;
                case 'img':
                    elemento.setAttribute('src', this.texto);
                    break;
                default:
                    elemento.innerHTML = this.texto;
                    break;
            }

            document.querySelector('#app').appendChild(elemento);

        }
        
        return html;

    }
}

const HeadingHTML = function(texto) {
    this.texto = texto;
}

const InputHTML = function(texto) {
    this.texto = texto;
}

const ImagenHTML = function(texto) {
    this.texto = texto;
}

const ParrafoHTML = function(texto) {
    this.texto = texto;
}

const sitioweb = new ConstructorSitios();

const elementosWeb = [];

elementosWeb.push( sitioweb.crearElemento('Bienvenidos', 'h1') );
elementosWeb.push( sitioweb.crearElemento('Bienvenidos a nuestro sitio web', 'p') );
elementosWeb.push( sitioweb.crearElemento('logo.png', 'img') );
elementosWeb.push( sitioweb.crearElemento('Newsletter', 'input') );

elementosWeb.forEach( elemento => {
    elemento.mostrar();
})

console.log(elementosWeb);