const express = require('express');
const path = require('path');
const mainRouter = require('./routers/main');

//Iniciando Express
const app = express();


//app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded());


//Declarando que a partir de '/' se va a manejar desde MainRouter
app.use('/', mainRouter);


//Creando servidor express
app.listen(process.env.PORT || 3000, () => {
    console.log("Levantando un servidor con Express en ", "http://localhost:3000");
});


