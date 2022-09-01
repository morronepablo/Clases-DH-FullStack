// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

//REquerimos las funciones de validacion
const { 
    validateName, 
    validateColor, 
    validateEmail, 
    validateEdad 
} = require('../validation/userValidation')

//Generamos nuestra array de validaciones (middleware)
const userValidations = [ 
    validateName, 
    validateColor, 
    validateEmail, 
    validateEdad 
];

router.get('/', mainController.index);

//Implementamos las validaciones en la ruta
router.post('/', userValidations, mainController.submit);

module.exports = router;