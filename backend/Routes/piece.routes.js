const { get_piece, delete_piece, add_piece, update_piece } = require('../Controllers/piece.controller')
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()



router.get('/', verifyToken, get_piece)
router.delete('/delete', verifyToken, delete_piece)
router.post('/post', verifyToken, add_piece)
router.put('/update/:id', verifyToken, update_piece)



module.exports = router;