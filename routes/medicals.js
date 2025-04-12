const express = require('express');
const router = express.Router();

const medicalsController = require('../controllers/medicals');

router.get('/', medicalsController.getAll);

router.get('/:id', medicalsController.getSingle);

module.exports = router;