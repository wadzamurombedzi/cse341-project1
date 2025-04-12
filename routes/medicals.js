const express = require('express');
const router = express.Router();

const medicalsController = require('../controllers/medicals');

router.get('/', medicalsController.getAll);

router.get('/:id', medicalsController.getSingle);

router.post('/', medicalsController.createMedicals);

router.put('/:id', medicalsController.updateMedicals);

router.delete('/:id', medicalsController.deleteMedicals);

module.exports = router;