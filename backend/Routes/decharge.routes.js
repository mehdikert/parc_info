const { getDech, deleteDech, addDech, updateDech } = require('../Controllers/decharge.controller')
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()



router.get('/', verifyToken, getDech)
router.delete('/delete', verifyToken, deleteDech)
router.post('/post', verifyToken, addDech)
router.put('/update/:id', verifyToken, updateDech)



module.exports = router;