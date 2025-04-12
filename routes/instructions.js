const express = require('express');
const router = express.Router();

const instructionsController = require('../controllers/instructions');

router.get('/', instructionsController.getAll);

router.get('/:id', instructionsController.getSingle);

module.exports = router;