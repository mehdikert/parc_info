const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

// login controller for authentification
const loginUser = (req, res) => {
    if (req.body.username == "test" && req.body.password == 'test') {
        let token = jwt.sign({ userId: 10 }, process.env.SECRETKEY)
        res.status(200).json({ token })
    } else {
        res.status(404).json({ message: 'username or password invalid' })
    }
}


const test = (req, res) => {
    res.status(200).json({ message: 'connecter avec id : ' + req.token.userId })
}

module.exports = { loginUser, test }