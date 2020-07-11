class UI {

    constructor() {
        this.init();
    }

    init() {
        this.construirSelect();
    }

    construirSelect() {
        api.obtenerMonedasAPI()
            .then( monedas => {

                const select = document.querySelector("#criptomoneda");

                for( const [key, value] of Object.entries(monedas.monedas.Data) ){
                    
                    // Agregar el Symbol y el Name como opciones

                    const option = document.createElement("option");
                    option.value = value.Symbol;
                    option.textContent = value.CoinName;
                    select.appendChild(option);

                }
            })
    }

    mostrarMensaje(mensaje, clases){

        const div = document.createElement("div");
        div.className = clases;
        div.innerHTML = mensaje;

        // Seleccionar mensajes
        const divMensaje = document.querySelector(".mensajes");
        divMensaje.appendChild(div);

        setTimeout( () => {
            const alerta = document.querySelector(".mensajes div");
            alerta.remove();
        }, 3000);

    }

    mostrarResultado( resultado, moneda, crypto ) {

        const datosMoneda = resultado[crypto][moneda];

        let precio = datosMoneda.PRICE.toFixed(2);
        let variacion = datosMoneda.CHANGEPCTDAY.toFixed(2);
        let actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleString('es-UY');

        // Consutruir el template
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: ${precio}</p>
                    <p>Variacion ultimo dia: %${variacion}</p>
                    <p>Última actualización: ${actualizado}</p>
                </div>
            </div>
        `

        this.toggleSpinner('block');

        setTimeout( () => {
            this.toggleSpinner('none');
            // Insertar el resultado
            document.querySelector("#resultado").innerHTML = templateHTML;
        }, 2000);

    }

    // Mostrar un spinner de carga para simular la carga
    toggleSpinner(view) {
        const spinner = document.querySelector(".contenido-spinner");
        spinner.style.display = view;
    }



}