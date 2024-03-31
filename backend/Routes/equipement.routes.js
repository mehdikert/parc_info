const { addEquip, getEquip, deleteEquip, updateEquip } = require('../Controllers/equipement.controller');

const router = require('express').Router()


router.post('/post', addEquip)
router.get('/', getEquip)
router.delete('/delete', deleteEquip)
router.put('/update/:id', updateEquip)


module.exports = router;
