const materiel = require('../models/materiel.model')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


const addMat = (req, res) => {
    const data = req.body
    try {
        const newuser = materiel.create(data)
        res.status(200).json({ message: "New materiel added" });
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}


const getMats = async (req, res) => {

    try {
        const data = await materiel.findAll();
        if (!data) {
            res.status(200).json({ message: "materiel not found" })
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}

const getMat = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await materiel.findOne({
            where: {
                code_immo: id
            }
        });
        if (!data) {
            return res.json({ message: "materiel not found" })
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}

const deleteMat = async (req, res) => {
    const id = req.params.id;
    try {
        const mat = await materiel.findOne({
            where: {
                code_immo: id
            }
        });
        if (!mat) {
            return res.status(200).json({ message: "Materiel doesn't exist" })
        }
        const deleteMateriel = materiel.destroy({
            where: {
                code_immo: id
            }
        })
        if (deleteMateriel) {
            res.status(200).json({ message: 'Materiel deleted' })
        }
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}


const updateMat = async (req, res) => {
    const id = req.params.id
    try {
        const data = req.body;
        const user = await materiel.findByPk(id);
        if (!user) {
            return res.status(200).json({ meessage: "user not found" })
        }

        await materiel.update(data, {
            where: {
                code_immo: id
            }
        });
        res.status(200).json({ message: 'user updated' })
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { addMat, getMats, getMat, deleteMat, updateMat }