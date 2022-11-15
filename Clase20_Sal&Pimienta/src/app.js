// Módulos
const express = require('express');
const app = express();
const path = require('path');
// Acá falta uno... 😇

const mainRouter = require('./routes/mainRouter');

// Configuración
app.use(express.static('public'));
// Acá falta el template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS
app.use('/', mainRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Servidor corriendo en http://localhost:${port} 🤓👌`);})