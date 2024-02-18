const router = require('express').Router()
const jwt = require('jsonwebtoken')
const { loginUser, test } = require('../Controllers/auth.cotroller');
const { valid_token } = require('../Middlewares/auth.middleware');

// login 
router.post('/login', loginUser)
router.get('/test', valid_token, test)

module.exports = router; 