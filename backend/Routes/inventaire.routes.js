const { getinv, deleteinv, addinv, updateinv } = require('../Controllers/inventaire.controller')
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()



router.get('/', verifyToken, getinv)
router.delete('/delete', verifyToken, deleteinv)
router.post('/post', verifyToken, addinv)
router.put('/update/:id', verifyToken, updateinv)



module.exports = router;