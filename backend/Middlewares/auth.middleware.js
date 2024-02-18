const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const valid_token = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        req.token = jwt.verify(token, process.env.SECRETKEY)
        next();

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = { valid_token }