const { Modele } = require('../models/models')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')



const addModele = async (req, res) => {
    const data = req.body;
    try {
        const verify_modele = await Modele.findOne({
            where: {
                design_modele: data.design_modele
            }
        })
        if (verify_modele) {
            return res.status(404).json({ message: "Modele Already Exist" })
        }
        const newMod = await Modele.create(data)
        res.status(200).json({ success: true, modele: data })
    } catch (error) {
        console.error(error)
        throw error
    }

}

const getModele = async (req, res) => {
    try {
        const modele = await Modele.findAll()
        if (!modele || modele.length === 0) {
            return res.status(404).json({ message: "Aucune marque trouver" })
        }
        res.status(200).json(modele)
    } catch (error) {
        console.error(error)
        throw error
    }
}

const deleteModele = async (req, res) => {
    const indexes = req.body.indexes;
    try {
        const deletedMods = await Promise.all(indexes.map(async (index) => {
            const mod = await Modele.findOne({
                where: {
                    id_mod: index
                }
            });
            if (!mod) {
                return { index, success: false, message: "Modele(s) doesn't exist" };
            } else {
                const deletedMod = await Modele.destroy({
                    where: {
                        id_mod: index
                    }
                });
                if (deletedMod) {
                    return { index, success: true, message: 'Modele(s) deleted' };
                } else {
                    return { index, success: false, message: 'Failed to delete Modele(s)' };
                }
            }
        }));
        res.status(200).json(deletedMods);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

const updateModele = async (req, res) => {
    const id = req.params.id;
    const data = req.body
    try {
        const verify = await Modele.findOne({
            where: {
                id_mod: id
            }
        })
        if (!verify) {
            return res.status(404).json({ message: "Modele not found" })
        }

        await Modele.update(data, {
            where: {
                id_mod: id
            }
        }).then(() => res.status(200).json({ message: "Modele updated" }))

    } catch (error) {
        console.error(error)
        throw error
    }
}

module.exports = { addModele, getModele, deleteModele, updateModele }