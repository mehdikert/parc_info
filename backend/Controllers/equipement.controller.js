const Equipement = require('../models/equipement.model')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')

const addEquip = async (req, res) => {
    try {
        // Récupérer les données de la requête
        const { design_equip, num_serie, prix_equip } = req.body;

        // Vérifier si toutes les données requises sont présentes
        if (!design_equip || !num_serie || !prix_equip) {
            return res.status(400).json({ error: 'Veuillez fournir toutes les données requises.' });
        }

        // Vérifier si le numéro de série existe déjà dans la base de données
        const existingEquipByNumSerie = await Equipement.findOne({ where: { num_serie } });
        if (existingEquipByNumSerie) {
            return res.status(400).json({ error: 'Le numéro de série existe déjà dans la base de données.' });
        }

        // Créer le nouvel équipement
        const newEquip = await Equipement.create({
            design_equip,
            num_serie,
            prix_equip
        });

        // Répondre avec le nouvel équipement créé
        res.status(201).json({ success: true, equipement: newEquip });
    } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'équipement :', error);
        res.status(500).json({ error: 'Erreur serveur lors de l\'ajout de l\'équipement.' });
    }
};


const getEquip = async (req, res) => {
    try {
        const equip = await Equipement.findAll()
        if (!equip || equip.length === 0) {
            return res.status(404).json({ message: "Aucun equipement trouver" })
        }
        res.status(200).json(equip)
    } catch (error) {
        console.error(error)
        throw error
    }
}

const deleteEquip = async (req, res) => {
    const indexes = req.body.indexes;
    try {
        const deletedEquips = await Promise.all(indexes.map(async (index) => {
            const equip = await Equipement.findOne({
                where: {
                    id_equip: index
                }
            });
            if (!equip) {
                return { index, success: false, message: "Equipement(s) doesn't exist" };
            } else {
                const deleted = await Equipement.destroy({
                    where: {
                        id_equip: index
                    }
                });
                if (deleted) {
                    return { index, success: true, message: 'Equipement(s) deleted' };
                } else {
                    return { index, success: false, message: 'Failed to delete Equipement(s)' };
                }
            }
        }));
        res.status(200).json(deletedEquips);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

const updateEquip = async (req, res) => {
    const id = req.params.id;
    const data = req.body
    try {
        const verify = await Equipement.findOne({
            where: {
                id_equip: id
            }
        })
        if (!verify) {
            return res.status(404).json({ message: "Equipement not found" })
        }

        await Equipement.update(data, {
            where: {
                id_equip: id
            }
        }).then(() => res.status(200).json({ message: "Equipement updated" }))

    } catch (error) {
        console.error(error)
        throw error
    }
}

module.exports = { addEquip, getEquip, deleteEquip, updateEquip }