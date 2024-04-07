const { getBL, deleteBL, addBL, updateBL } = require('../Controllers/bl.controller')
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()



router.get('/', verifyToken, getBL)
router.delete('/delete', verifyToken, deleteBL)
router.post('/post', verifyToken, addBL)
router.put('/update/:id', verifyToken, updateBL)



module.exports = router;