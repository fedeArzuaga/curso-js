// Tambien se le conoce como suscriptor/publicador

let observer = {
    
    obtenerOfertas: function(callback) {
        if( typeof callback === "function" ) {
            this.suscribers[ this.suscribers.length ] = callback;
        }
    },

    cancelarOfertas: function(callback) {
        for( let i = 0; i < this.suscribers.length; i++ ) {
            if( this.suscribers[i] === callback ) {
                delete this.suscribers[i];
            }
        }
    },

    publicarOferta: function(oferta) {
        for( let i = 0; i < this.suscribers.length; i++ ) {
            if( typeof this.suscribers === "function" ) {
                this.suscribers[i](oferta);
            }
        }
    },

    crear: function(objeto) {
        for( let i in this ){
            if( this.hasOwnProperty(i) ){
                objeto[i] = this[i];
                objeto.suscribers = [];
            }
        }
    }

}

// Vendedores
const udemy = {
    nuevoCurso: function() {
        const curso = "Un nuevo curso";
        this.publicarOferta(curso);
    }
}

const facebook = {
    nuevoAnuncio: function() {
        const oferta = "Compra un celular";
        this.publicarOferta(oferta);
    }
}

// Crear los publicadores
observer.crear(udemy);
observer.crear(facebook);

// Personas
const juan = {
    compartir: function(oferta) {
        console.log("Excelente oferta de " + oferta);
    }
}

const karen = {
    interesa: function(oferta) {
        console.log("Me interesa la oferta de " + oferta);
    }
}

udemy.obtenerOfertas( juan.compartir );
udemy.nuevoCurso();