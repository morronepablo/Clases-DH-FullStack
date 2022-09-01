// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// Devolver todos los productos  
router.get('/', productsController.index); 

/* Quiten el comentario y editen según el enunciado


// Crear un producto
router.???('/???/', productsController.create); 
router.???('/', productsController.store); 

// Devolver un producto 
router.???('/:id/', productsController.detail); 

// Editar un producto 
router.???('/:id/???', productsController.edit); 
router.???('/:id', productsController.update); 

// Eliminar un producto 
router.???('/:id', productsController.destroy);

*/

module.exports = router;