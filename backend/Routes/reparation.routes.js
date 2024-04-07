const { get_rep, delete_rep, add_rep, update_rep } = require('../Controllers/reparation.controller')
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()



router.get('/', verifyToken, get_rep)
router.delete('/delete', verifyToken, delete_rep)
router.post('/post', verifyToken, add_rep)
router.put('/update/:id', verifyToken, update_rep)



module.exports = router;