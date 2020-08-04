// Importar express
const express = require('express');


// Configurar express
const app = express();
app.get('/', (req, res) => {
    res.send("Inicio");
});

app.get('/nosotros', (req, res) => {
    res.send("Nosotros");
});

app.listen(3000);


