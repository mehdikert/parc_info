const { addUser } = require('../Controllers/user.controller')

const router = require('express').Router()


// get all users
router.get('/get', addUser)
// get  user 
//router.get('/:id',)
// add user 
//router.post('',)
// delete user 
//router.delete('/:id',)
// update user 
//router.put('/:id',)

module.exports = router;