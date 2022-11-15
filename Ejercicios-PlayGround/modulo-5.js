/*==================================================
MODULO 5
Express

Clase-19 - Patrones de diseño MVC
-Rutas Parametrizadas
--Buscar una serie

****** esto ******
const express = require('express');
const app = express();

app.get("/serie/:id", function(req, res) {
    let serieBuscada = series.find(serie => serie.id == req.params.id);
    res.send(serieBuscada);
})
******** otra opcion ******
const express = require('express');
const app = express();

app.get("/serie/:id", function(req, res) {
    let serieBuscada = series.filter(serie => serie.id == req.params.id);
    res.send(serieBuscada[0]);
})

Clase-23 - CRUD:Episodio 2

***** Multer: Subiendo archivos *****
A) Preparando formularios para permitir la carga de archivos

<html>
  <head>
    <title>Carga de imágenes</title>
  </head>
  <body>
    <form action="upload" method="POST" enctype="multipart/form-data">

    </form>
  </body>
</html>

B) Usando Multer para la carga de archivos

const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

router.post('/register',  upload.any(), usersController.save);






Clase-25 - Middlewares

******* Introduccion a express validator ******
const express = require('express');
const router = express.Router();
let {check, validationResult, body} = require('express-validator');

const UsuarioController = require('../controllers/UsuarioController');

validationResult = [
    check('email')
    .isEmail(),
    check('password')
    .isLength({ min: 6 })
];

router.post('/registro', validationResult,  UsuarioController.registro);


==================================================*/

