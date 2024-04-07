const { getBs, deleteBs, addBs, updateBs } = require('../Controllers/bs.controller')
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()



router.get('/', verifyToken, getBs)
router.delete('/delete', verifyToken, deleteBs)
router.post('/post', verifyToken, addBs)
router.put('/update/:id', verifyToken, updateBs)



module.exports = router;