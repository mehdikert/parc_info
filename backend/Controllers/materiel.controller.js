const { Materiel, Marque, Modele } = require('../models/models')
const Equipement = require('../models/equipement.model')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


const addMat = async (req, res) => {
    const data = req.body;
    try {
        // Vérifier si la marque existe
        const marqueExist = await Marque.findByPk(data.id_mar);
        if (!marqueExist) {
            return res.status(404).json({ message: "La marque spécifiée n'existe pas." });
        }

        // Vérifier si le modèle existe
        const modeleExist = await Modele.findByPk(data.id_mod);
        if (!modeleExist) {
            return res.status(404).json({ message: "Le modèle spécifié n'existe pas." });
        }

        // Vérifier si l'equipement existe
        const equipExist = await Equipement.findByPk(data.id_equip);
        if (!equipExist) {
            return res.status(404).json({ message: "L'equipement spécifié n'existe pas." });
        }

        // Ajouter le matériel
        const verify = await Materiel.findOne({
            where: {
                code_seaal: data.code_seaal
            }
        })
        if (verify) {
            return res.status(404).json({ message: "Le matériel existe déjà." });
        }

        const newMat = await Materiel.create(data)
        res.status(200).json({ success: true, materiel: newMat })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Une erreur serveur s'est produite." });
    }
};

const getMatCol = async (req, res) => {
    try {
        // Obtenir les informations sur les colonnes de la table Materiel
        const columns = await Materiel.describe();
        res.status(200).json(columns);
    } catch (error) {
        console.error('Error fetching Materiel columns:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getMat = async (req, res) => {
    try {
        const mat = await Materiel.findAll()
        res.status(200).json(mat)
    } catch (error) {
        console.error(error)
        throw error
    }
};


const deleteMat = async (req, res) => {
    const indexes = req.body.indexes;
    try {
        const deletedMats = await Promise.all(indexes.map(async (index) => {
            const mat = await Materiel.findOne({
                where: {
                    code_seaal: index
                }
            });
            if (!mat) {
                return { index, success: false, message: "Materiel(s) doesn't exist" };
            } else {
                const deletedMat = await Materiel.destroy({
                    where: {
                        code_seaal: index
                    }
                });
                if (deletedMat) {
                    return { index, success: true, message: 'Materiel(s) deleted' };
                } else {
                    return { index, success: false, message: 'Failed to delete Materiel(s)' };
                }
            }
        }));
        res.status(200).json(deletedMats);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

const updateMat = async (req, res) => {
    const id = req.params.id;
    const data = req.body
    try {
        const verify = await Materiel.findOne({
            where: {
                code_seaal: id
            }
        })
        if (!verify) {
            return res.status(404).json({ message: "Materiel not found" })
        }

        await Materiel.update(data, {
            where: {
                code_seaal: id
            }
        }).then(() => res.status(200).json({ message: "Materiel updated" }))

    } catch (error) {
        console.error(error)
        throw error
    }
};

module.exports = { addMat, getMat, deleteMat, updateMat, getMatCol }