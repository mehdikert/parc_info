const { get_rep_piece, delete_rep_piece, add_rep_piece, update_rep_piece } = require('../Controllers/rep_piece.controller')
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()



router.get('/', verifyToken, get_rep_piece)
router.delete('/delete', verifyToken, delete_rep_piece)
router.post('/post', verifyToken, add_rep_piece)
router.put('/update/rep/:id_rep/piece/:id_piece', verifyToken, update_rep_piece)



module.exports = router;