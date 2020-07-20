// Patros de diseños en modules

const comprarBoleto = (function(){

    // Variables privadas
    let evento = 'Conferencia';

    const adquirirBoleto = () => {

        const element = document.createElement("p");
        element.textContent = `Comprando boleto para: ${evento}`;
        document.querySelector("#app").appendChild(element);

    }

    // Variables publicas
    return {
        mostrarBoleto: function() {
            adquirirBoleto();
        }
    }

})();

comprarBoleto.mostrarBoleto();