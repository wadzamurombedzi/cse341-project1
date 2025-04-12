const router = require('express').Router();

//router.get('/', (req, res) => { res.send('Hello World');});

router.use('/medicals', require('./medicals'));
router.use('/instructions', require('./instructions'));

module.exports = router;