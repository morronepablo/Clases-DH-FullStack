// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Configuración de multer ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/products')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage });

/*** Devolver todos los productos ***/ 
router.get('/', productsController.index); 

/*** Crear un producto ***/ 
router.get('/detail/create', productsController.create); 
router.post('/', upload.single('newProductImage'), productsController.store); 

/*** Devolver un producto ***/ 
router.get('/detail/:id/', productsController.detail); 

/*** Editar un producto ***/ 
router.get('/edit/:id/', productsController.edit); 
router.put('/edit/:id/', upload.single('editedProductImage'), productsController.update); 


/*** Eliminar un producto***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
