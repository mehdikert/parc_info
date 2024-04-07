const { getFours, deleteFours, addFour, updateFour, getFourCol } = require('../Controllers/fournisseur.controller')
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()



router.get('/', verifyToken, getFours)
router.get('/columns', verifyToken, getFourCol)
router.delete('/delete', verifyToken, deleteFours)
router.post('/post', verifyToken, addFour)
router.put('/update/:id', verifyToken, updateFour)



module.exports = router;