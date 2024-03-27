const { getFours, getFour, deleteFours, addFour, updateFour } = require('../Controllers/fournisseur.controller')

const router = require('express').Router()



router.get('/', getFours)
router.get('/:id', getFour)
router.delete('/', deleteFours)
router.post('/post', addFour)
router.put('/update/:id', updateFour)



module.exports = router;