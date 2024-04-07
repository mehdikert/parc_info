const jwt = require('jsonwebtoken');
const { Utilisateur } = require('../models/models');
const dotenv = require('dotenv').config()
const sequelize = require('../utils/database')
const seq = require('sequelize')
const bcrypt = require('bcrypt')

// login controller for authentification

const loginUser = async (req, res) => {
    const data = req.body;
    try {
        const user = await Utilisateur.findOne({
            where: {
                username: data.username
            }
        })

        if (user) {
            const isPasswordValid = await bcrypt.compare(data.password_util, user.password_util)
            if (!isPasswordValid) {
                return res.status(400).json({ message: "Invalid password" })
            }

            let token = jwt.sign({ id_util: user.id_util }, process.env.SECRETKEY)
            res.status(200).json({ token: token, user: user })
        }
        else {
            res.status(400).json({ message: 'Invalid username' })
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


const test = (req, res) => {
    try {
        if (!req.token) {
            res.status(400).json({ message: 'token error' })
        }
        res.status(200).json({ message: 'connecter avec id : ' + req.token.userId })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { loginUser, test }