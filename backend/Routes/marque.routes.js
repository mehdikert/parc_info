const { addMarque, getMarque, deleteMarque, updateMarque } = require('../Controllers/marque.controller');

const router = require('express').Router()


router.post('/post', addMarque)
router.get('/', getMarque)
router.delete('/delete', deleteMarque)
router.put('/update/:id', updateMarque)


module.exports = router;
