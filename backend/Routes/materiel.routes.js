const { addMat, getMat, deleteMat, updateMat } = require('../Controllers/materiel.controller');

const router = require('express').Router()


router.post('/post', addMat)
router.get('/', getMat)
router.delete('/delete', deleteMat)
router.put('/update/:id', updateMat)


module.exports = router;
