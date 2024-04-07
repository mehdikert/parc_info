const { get_InvMat, delete_InvMat, add_InvMat, update_InvMat } = require('../Controllers/inv_mat.controller')
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()



router.get('/', verifyToken, get_InvMat)
router.delete('/delete', verifyToken, delete_InvMat)
router.post('/post', verifyToken, add_InvMat)
router.put('/update/i/:id_inv/m/:code_seeal', verifyToken, update_InvMat)



module.exports = router;