const router = require('express').Router()
const jwt = require('jsonwebtoken')
const { loginUser, test } = require('../Controllers/auth.controller');
const { valid_token, valid_admin } = require('../Middlewares/auth.middleware');
const { addUser } = require('../Controllers/user.controller');
const verifyToken = require('../Middlewares/verification.middleware');


// login 
router.post('/login', loginUser)
router.post('/register', verifyToken, addUser)
router.get('/test', valid_token, test)

module.exports = router; 