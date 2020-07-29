let DB;

// Selectores de la interfaz
const form = document.querySelector('form');
const citas = document.querySelector('#citas');
const heading = document.querySelector('#administra');

// Esperar por el DOM Ready
document.addEventListener("DOMContentLoaded", () => {

    // Crear la base de datos
    let crearDB = window.indexedDB.open('citas', 1);

    // Si hay un error, a la consola
    crearDB.onerror = function() {
        console.log("Hubo un error");
    }

    // Si todo esta bien, muestra en consola y asignar la base de datos
    crearDB.onsuccess = function() {
        //console.log('todo listo');

        // Asignar a la base de datos

        DB = crearDB.result;
        //console.log(DB);

        mostrarCitas();

    }

    // Este metodo solo correo una vez y es ideal para crear el schema
    crearDB.onupgradeneeded = function(e) {

        // El evento es la misma base de datos
        let db = e.target.result;

        // definir el objecstore, toma 2 parametos: el nombre de la base de datos y las opciones
        let objecStore = db.createObjectStore("citas", {
            keyPath: 'key', // Es el indice de la base de datos
            autoIncrement: true // Autoincrementa por registro
        });

        objecStore.createIndex('mascota', 'mascota', {
            unique: false 
        });

        objecStore.createIndex('cliente', 'cliente', {
            unique: false 
        });

        objecStore.createIndex('telefono', 'telefono', {
            unique: false 
        });

        objecStore.createIndex('fecha', 'fecha', {
            unique: false 
        });

        objecStore.createIndex('hora', 'hora', {
            unique: false 
        });

        objecStore.createIndex('sintmoas', 'mascota', {
            unique: false 
        });
        
    }

    // Cuando el form se envia
    form.addEventListener('submit', agregarDatos)

    function agregarDatos(e) {
        
        e.preventDefault();

        const data = {
            mascota: form.mascota.value,
            cliente: form.cliente.value,
            telefono: form.telefono.value,
            fecha: form.fecha.value,
            hora: form.hora.value,
            sintomas: form.sintomas.value
        }

        // console.log(data);

        // en IndexDB se utilizan las transacciones

        let transaction = DB.transaction(['citas'], 'readwrite');
        let objectStore = transaction.objectStore('citas');
        let peticion = objectStore.add(data);

        console.log(peticion);

        peticion.onsuccess = () => {
            form.reset();
        }

        transaction.oncomplete = () => {
            console.log('Cita agregada');
        }

        transaction.onerror = () => {
            console.log('Hubo un error');
        }

    }

    function mostrarCitas() {

        // limpiar las citas anteriores
        while( citas.firstChild ) {
            citas.removeChild(citas.firstChild);
        }

        // Creamos un objectStore
        let objectStore = DB.transaction(['citas'], 'readwrite').objectStore('citas');

        // Esto retorna una peticion
        objectStore.openCursor().onsuccess = function(e) {

            // Cursos se va a ubicar en el registro ubicado
            let cursor = e.target.cursor;

            console.log( cursor );

        }

    }

});