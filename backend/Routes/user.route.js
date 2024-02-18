const { addUser, getUsers, getUser, deleteUser, updateUser } = require('../Controllers/user.controller')

const router = require('express').Router()


// get all users
router.get('/', getUsers)
// get  user 
router.get('/:id', getUser)
// add user 
router.post('/post', addUser)
// delete user 
router.delete('/delete/:id', deleteUser)
// update user 
router.put('/update/:id', updateUser)

module.exports = router;