const { addMat, getMat, deleteMat, updateMat, getMatCol } = require('../Controllers/materiel.controller');
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()


router.post('/post', verifyToken, addMat)
router.get('/', verifyToken, getMat)
router.delete('/delete', verifyToken, deleteMat)
router.put('/update/:id', verifyToken, updateMat)

router.get('/columns', getMatCol);

module.exports = router;
