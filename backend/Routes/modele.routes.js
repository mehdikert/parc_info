const { addModele, getModele, deleteModele, updateModele } = require('../Controllers/modele.controller');

const router = require('express').Router()


router.post('/post', addModele)
router.get('/', getModele)
router.delete('/delete', deleteModele)
router.put('/update/:id', updateModele)


module.exports = router;
