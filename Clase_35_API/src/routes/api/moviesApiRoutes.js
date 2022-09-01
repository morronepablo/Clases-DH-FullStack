const express = require('express');
const router = express.Router();
const moviesApiController = require('../../controllers/api/moviesApiController');

router.post('/movies', moviesApiController.create);
router.delete('/movies/:id', moviesApiController.delete);



module.exports = router;