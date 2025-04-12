const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => { 
    //#swagger.tags=['Hello World']
    res.send('Hello World');
});

router.use('/medicals', require('./medicals'));
router.use('/instructions', require('./instructions'));

module.exports = router;