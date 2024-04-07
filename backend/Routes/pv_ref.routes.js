const { getPv, deletePv, addPv, updatePv } = require('../Controllers/pv_ref.controller')
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()



router.get('/', verifyToken, getPv)
router.delete('/delete', verifyToken, deletePv)
router.post('/post', verifyToken, addPv)
router.put('/update/:id', verifyToken, updatePv)



module.exports = router;