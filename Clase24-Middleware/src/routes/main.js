const express = require('express')
const router = express.Router()

const mainController = require('../controllers/mainController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', mainController.index)
router.get('/admin', authMiddleware, mainController.admin)

module.exports = router;