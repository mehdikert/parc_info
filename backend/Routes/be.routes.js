const { getBe, deleteBe, addBe, updateBe } = require('../Controllers/be.controller')
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()



router.get('/', verifyToken, getBe)
router.delete('/delete', verifyToken, deleteBe)
router.post('/post', verifyToken, addBe)
router.put('/update/:id', verifyToken, updateBe)



module.exports = router;