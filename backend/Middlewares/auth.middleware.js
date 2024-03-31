const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const sequelize = require('sequelize');
const { Utilisateur } = require('../models/models');

const valid_token = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        req.token = jwt.verify(token, process.env.SECRETKEY)
        next();
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}



const valid_admin = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    try {
        jwt.verify(token, process.env.SECRETKEY, async (err, decoded) => {
            if (err) {
                // Si une erreur se produit lors du décodage
                console.error('Erreur lors du décodage du token :', err);
            } else {
                // Si le décodage est réussi, 'decoded' contient le contenu du token
                console.log('Contenu du token décrypté :', decoded);
                const id = decoded.id_util;
                const user = await Utilisateur.findOne({
                    where: {
                        id_util: id
                    }
                })
                if (user.role !== 'admin') {
                    return res.status(403).json({ message: "acces non authorisé , vous devez etre admin" })
                }
                next();
            }
        })

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


module.exports = { valid_token, valid_admin }