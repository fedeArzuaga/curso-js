// Lo primero es acceder al objeto Indexed db y su metodo open()

// Luego, vemos si la base de datos existe mediante el metodo onupgradeneeded()

// Crear almacen de objetos con el metodo createObjectStore()

// Escuchar los eventos de exito (onsuccess) y error (onerror)

const indexedDB = window.indexedDB
const form = document.getElementById('form');
const tasks = document.getElementById('tasks');

if ( indexedDB && form ) {

    let db

    // Accedemos a la base de datos
    const request = indexedDB.open( 'tasksList', 1 );

    // En caso de que todo va bien, se abre la base de datos
    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
        readData();
    }

    // Cuando necesite crearse, se va a ejecutar este metodo
    request.onupgradeneeded = () => {
        db = request.result
        const obectStore = db.createObjectStore('tasks', {
            // Generando una clave key
            keyPath: 'taskTitle'
        });
    }

    // Cuando ocurra un error, se lanza este metodo
    request.onerror = error => {
        console.log('Error', error)
    }

    // Agregando datos a la base de datos
    const addData = data => {

        try {

            // Creamos la transaccion a realizar
            const transaction = db.transaction(['tasks'], 'readwrite')

            // Realizamos la transaccion
            const objectStore = transaction.objectStore('tasks')

            // Agregar los datos
            const request = objectStore.add(data);

            tasks.innerHTML = '';

            readData();

        } catch(error) {

            console.log(error);

        }

    }

    const getData = key => {

        try {
            // Creamos la transaccion a realizar
            const transaction = db.transaction(['tasks'], 'readwrite')
            // Realizamos la transaccion
            const objectStore = transaction.objectStore('tasks')
            // Agregar los datos
            const request = objectStore.get(key);
            request.onsuccess = () => {
                form.task.value = request.result.taskTitle;
            }
        } catch(error) {
            console.log(error);
        }

    }

    // Leer datos
    const readData = () => {

        try {
            // Creamos la transaccion a realizar
            const transaction = db.transaction(['tasks'], 'readonly')
            // Realizamos la transaccion
            const objectStore = transaction.objectStore('tasks')
            // Agregar los datos
            const request = objectStore.openCursor();
            // Vemos si todo a ido bien
            request.onsuccess = e => {
                const cursor = e.target.result;
                if ( cursor ) {
                    const taskTitle = document.createElement('p');
                    taskTitle.textContent = cursor.value.taskTitle;
                    const taskPriority = document.createElement('p');
                    taskPriority.textContent = cursor.value.taskPriority;
                    const updateButton = document.createElement('button');
                    updateButton.dataset.type = 'update';
                    updateButton.dataset.type = cursor.key;
                    updateButton.textContent = 'Update';
                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    tasks.appendChild(taskTitle)
                    tasks.appendChild(taskPriority)
                    tasks.appendChild(updateButton)
                    tasks.appendChild(deleteButton)
                    cursor.continue();
                } else {
                    console.log('No more tasks')
                }

            }

            // Vemos si hay algun error
            request.onerror = e => {
                console.log(e.target);
            }

        } catch(error) {

            console.log(error);

        }

    }

    form.addEventListener('submit', e => {

        e.preventDefault();

        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }

        addData(data);
        getData('Primer Tarea');

    });

    

}