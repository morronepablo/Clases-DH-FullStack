const { body } = require('express-validator');

const validateName = body('nombre')
    .notEmpty()
    .withMessage('Debes completar el nombre');

const validateColor = body('color')
    .notEmpty()
    .withMessage('Debes seleccionar un color');

const validateEmail = body('email')
    .notEmpty()
    .withMessage('Debes completar el email');

const validateEdad = body('edad')
    .notEmpty()
    .withMessage('Debes completar la edad')
    .bail()
    .isNumeric()
    .withMessage('Debes ingresar solo número');

module.exports = { 
    validateName,
    validateColor, 
    validateEmail,
    validateEdad 
};