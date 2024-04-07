const { getFich_affec, deleteFich_affec, addFich_affec, updateFich_affec } = require('../Controllers/fiche_affec.controller')
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()



router.get('/', verifyToken, getFich_affec)
router.delete('/delete', verifyToken, deleteFich_affec)
router.post('/post', verifyToken, addFich_affec)
router.put('/update/:id', verifyToken, updateFich_affec)



module.exports = router;