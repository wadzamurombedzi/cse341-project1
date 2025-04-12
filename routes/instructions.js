const express = require('express');
const router = express.Router();

const instructionsController = require('../controllers/instructions');

router.get('/', instructionsController.getAll);

router.get('/:id', instructionsController.getSingle);

router.post('/', instructionsController.createInstructions);

router.put('/:id', instructionsController.updateInstructions);

router.delete('/:id', instructionsController.deleteInstructions);

module.exports = router;