const { Inventaire } = require('../models/models')
const Equipement = require('../models/equipement.model')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


const addinv = async (req, res) => {
    const data = req.body;
    try {
        const newInv = await Inventaire.create(data);
        res.status(200).json({ success: true, inventaire: newInv })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Une erreur serveur s'est produite." });
    }
};


const getinv = async (req, res) => {
    try {
        const inv = await Inventaire.findAll()
        if (!inv || inv.length === 0) {
            return res.status(404).json({ message: "Aucun inventaire trouver" })
        }
        res.status(200).json(inv)
    } catch (error) {
        console.error(error)
        throw error
    }
};


const deleteinv = async (req, res) => {
    const indexes = req.body.indexes;
    try {
        const deletedinv = await Promise.all(indexes.map(async (index) => {
            const inv = await Inventaire.findOne({
                where: {
                    id_inv: index
                }
            });
            if (!inv) {
                return { index, success: false, message: "Inventaire doesn't exist" };
            } else {
                const deleteInv = await Inventaire.destroy({
                    where: {
                        id_inv: index
                    }
                });
                if (deleteInv) {
                    return { index, success: true, message: 'Inventaire deleted' };
                } else {
                    return { index, success: false, message: 'Failed to delete Inventaire' };
                }
            }
        }));
        res.status(200).json(deletedinv);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

const updateinv = async (req, res) => {
    const id = req.params.id;
    const data = req.body
    try {
        const verify = await Inventaire.findOne({
            where: {
                id_inv: id
            }
        })
        if (!verify) {
            return res.status(404).json({ message: "Inventaire not found" })
        }

        await Inventaire.update(data, {
            where: {
                id_inv: id
            }
        }).then(() => res.status(200).json({ message: "Inventaire updated" }))

    } catch (error) {
        console.error(error)
        throw error
    }
};

module.exports = { addinv, getinv, deleteinv, updateinv }