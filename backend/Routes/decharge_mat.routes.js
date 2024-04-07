const { getDech_mat, deleteDech_mat, addDech_mat, updateDech_mat } = require('../Controllers/decharg_mat.controller')
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()



router.get('/', verifyToken, getDech_mat)
router.delete('/delete', verifyToken, deleteDech_mat)
router.post('/post', verifyToken, addDech_mat)
router.put('/update/:id', verifyToken, updateDech_mat)



module.exports = router;