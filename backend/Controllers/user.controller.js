const user = require('../models/user.model')
const addUser = (req, res) => {
    console.log('hello');
    try {
        res.json('valid')
    } catch (error) {
        res.json(error)
    }
}


module.exports = { addUser }