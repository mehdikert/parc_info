const { addUser, getUsers, getUserCol, updateUser, deleteUsers } = require('../Controllers/user.controller')
const verifyToken = require('../Middlewares/verification.middleware')

const router = require('express').Router()


// get all users
router.get('/', verifyToken, getUsers)
router.get('/columns', verifyToken, getUserCol)



router.post('/post', addUser)
// delete user
router.delete('/delete', verifyToken, deleteUsers)
// update user 
router.put('/update/:id', verifyToken, updateUser)

module.exports = router;