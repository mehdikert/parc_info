const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const utilisateurs = require('../models/user.model');
const sequelize = require('sequelize');
const valid_token = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        req.token = jwt.verify(token, process.env.SECRETKEY)
        next();
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


const role_user = async (req, res, next) => {
    const id = req.token.userId;
    try {
        const user = await utilisateurs.findOne({
            where: {
                mat_id: id
            }
        })
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        next();
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


module.exports = { valid_token, role_user }