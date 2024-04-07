const { addEquip, getEquip, deleteEquip, updateEquip } = require('../Controllers/equipement.controller');
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()


router.post('/post', verifyToken, addEquip)
router.get('/', verifyToken, getEquip)
router.delete('/delete', verifyToken, deleteEquip)
router.put('/update/:id', verifyToken, updateEquip)


module.exports = router;
