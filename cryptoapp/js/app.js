const api = new API("f940aa677a97c5bd7fee61f7a542762b58b0a6a97cb1996b02a439eb15b3dd77");
const coins = api.obtenerMonedasAPI();
const ui = new UI();

ui.mostrarMensaje("Texto", "Clase")


// Leer formulario
const form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    userSelection = {
        coin: e.target.coin.value,
        crypto: e.target.crypto.value
    }

    if( userSelection.coin === "" || userSelection.crypto === "" ){

        console.log("Uno o más campos están vacíos. Asegúrate de rellenar todos los campos con las opciones que prefieras");

        // Alerta de error
        ui.mostrarMensaje(
            "Uno o más campos están vacíos. Asegúrate de rellenar todos los campos con las opciones que prefieras", 
            "alert bg-danger text-center"
            );


    }else{

        api.obtenerValores(userSelection.coin, userSelection.crypto)
            .then( data => {
                /* console.log(data.resultado.RAW, userSelection.coin, userSelection.crypto) */
                console.log(data);
                ui.mostrarResultado(data.resultado.RAW, userSelection.coin, userSelection.crypto);
            }).catch(error => {

                if( error ){

                    console.log(error);

                    ui.mostrarMensaje("Lo sentimos, faltan datos en nuestra base de datos para realizar la operacion", "alert bg-danger text-center");
                };

            })

    }

});