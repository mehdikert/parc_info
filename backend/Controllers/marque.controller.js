const { Marque } = require('../models/models')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')

const addMarque = async (req, res) => {
    const data = req.body;
    try {
        const verify = await Marque.findOne({
            where: {
                design_marque: data.design_marque
            }
        })
        if (verify) {
            return res.status(404).json({ message: "Marque Already Exist" })
        }
        const newMarq = await Marque.create(data)
        res.status(200).json({ success: true, marque: data })
    } catch (error) {
        console.error(error)
        throw error
    }

}

const getMarque = async (req, res) => {

    try {
        const marque = await Marque.findAll()
        if (!marque || marque.length === 0) {
            return res.status(404).json({ message: "Aucune marque trouver" })
        }
        res.status(200).json(marque)
    } catch (error) {
        console.error(error)
        throw error
    }
}

const deleteMarque = async (req, res) => {
    const indexes = req.body.indexes;
    try {
        const deletedMarqs = await Promise.all(indexes.map(async (index) => {
            const marq = await Marque.findOne({
                where: {
                    id_mar: index
                }
            });
            if (!marq) {
                return { index, success: false, message: "Marque(s) doesn't exist" };
            } else {
                const deletedMarq = await Marque.destroy({
                    where: {
                        id_mar: index
                    }
                });
                if (deletedMarq) {
                    return { index, success: true, message: 'Fournisseur(s) deleted' };
                } else {
                    return { index, success: false, message: 'Failed to delete Fournisseur(s)' };
                }
            }
        }));
        res.status(200).json(deletedMarqs);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

const updateMarque = async (req, res) => {
    const id = req.params.id;
    const data = req.body
    try {
        const verify = await Marque.findOne({
            where: {
                id_mar: id
            }
        })
        if (!verify) {
            return res.status(404).json({ message: "Marque not found" })
        }

        await Marque.update(data, {
            where: {
                id_mar: id
            }
        }).then(() => res.status(200).json({ message: "Marque updated" }))

    } catch (error) {
        console.error(error)
        throw error
    }
}

module.exports = { addMarque, getMarque, deleteMarque, updateMarque }