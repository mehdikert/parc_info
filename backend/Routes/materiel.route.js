const { addMat, getMats, getMat, deleteMat, updateMat } = require('../Controllers/materiel.controller')

const router = require('express').Router()


// get all meteriel
router.get('/', getMats)
// get one materiel
router.get('/:id', getMat)
// delete one meteriel
router.delete('/delete/:id', deleteMat)
// update one materiel 
router.put('/update/:id', updateMat)
// add one materiel 
router.post('/post', addMat)


module.exports = router

