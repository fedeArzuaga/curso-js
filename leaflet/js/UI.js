class UI {
    constructor() {

        // Instanciando la api
        this.api = new API();

        // Crear los markers con layergroups
        this.markers = new L.LayerGroup();

        // Iniciar el mapa
        this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }

    mostrarEstablecimientos() {

        this.api.obtenerDatos()
            .then( datos => {
                
                const resultados = datos.respuestaJson.results;

                this.mostrarPines(resultados);

            });

    }

    mostrarPines(datos) {

        // Limpiar los markers
        this.markers.clearLayers();

        // Recorrer los arreglos
        datos.forEach( dato => {

            const {latitude, longitude, calle, regular, premium} = dato;

            // Crear popup
            const opcionesPopup = L.popup()
                .setContent(`
                    <p><b>Calle:</b> ${calle}</p>
                    <p><b>Precio regular:</b> $${regular}</p>
                    <p><b>Precio premium:</b> $${premium}</p>
                `);

            // Agregar el pin
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(opcionesPopup);

            this.markers.addLayer(marker);

        });

        this.markers.addTo( this.mapa );

    }

    obtenerSugerencias( busqueda ) {

        this.api.obtenerDatos()
            .then( datos => {
                
                // Obtener datos
                const resultados = datos.respuestaJson.results;

                this.filtrarSugerencias( resultados, busqueda );

            })

    }

    filtrarSugerencias( resultado, busqueda ) {

        const filtro = resultado.filter(filtro => 
            filtro.calle.indexOf(busqueda) !== -1
        );

        this.mostrarPines(filtro);

    }

}