const { getDem_ref, deleteDem_ref, addDem_ref, updateDem_ref } = require('../Controllers/dem_ref.controller')
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()

router.get('/', verifyToken, getDem_ref)
router.delete('/delete', verifyToken, deleteDem_ref)
router.post('/post', verifyToken, addDem_ref)
router.put('/update/:id', verifyToken, updateDem_ref)

module.exports = router;