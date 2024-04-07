const { addModele, getModele, deleteModele, updateModele } = require('../Controllers/modele.controller');
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()


router.post('/post', verifyToken, addModele)
router.get('/', verifyToken, getModele)
router.delete('/delete', verifyToken, deleteModele)
router.put('/update/:id', verifyToken, updateModele)


module.exports = router;
