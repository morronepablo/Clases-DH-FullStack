const express = require('express')
const router = express.Router()

const productsController = require('../controllers/productsController')

router.get('/', productsController.all)
router.get('/:id', productsController.details)
router.get('/create', productsController.create)

module.exports = router