const { addMarque, getMarque, deleteMarque, updateMarque } = require('../Controllers/marque.controller');
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()


router.post('/post', verifyToken, addMarque)
router.get('/', verifyToken, getMarque)
router.delete('/delete', verifyToken, deleteMarque)
router.put('/update/:id', verifyToken, updateMarque)


module.exports = router;
