// Importar express
const express = require('express');
const path = require('path');
const routes = require('./routes');
const configs = require('./config');
const db = require('./config/database');

db.authenticate()
    .then( () => console.log('DB Conected!') )
    .catch( error => console.error(error) );

// Configurar express
const app = express();

//validar si estamos en desarrollo o produccion
const config = configs[app.get('env')]

// creamos la variagble para sitio web
app.locals.titulo = config.nombresitio;

// Habilitar pug
app.set('view engine', 'pug');

// Agregar las vistas
app.set('views', path.join(__dirname, './views'));

// Cargar una carpeta statica llamada public
app.use(express.static('public'));

// Muestra el año actual
app.use( (req, res, next) => {
    const fecha = new Date().getFullYear();
    res.locals.fechaActual = fecha;
    return next();
})

// Cargar las rutas
app.use('/', routes());

app.listen(3000);


