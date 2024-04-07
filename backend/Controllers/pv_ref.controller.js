const { PVRef } = require('../models/models')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


// post
const addPv = async (req, res) => {
    const data = req.body;
    try {
        const newPv = await PVRef.create(data);
        res.status(200).json({ newPv });
    } catch (error) {
        console.error("Erreur lors de l'ajout du pv ", error);
        res.status(500).send({ success: false, message: error.message });
    }
}

// get 
const getPv = async (req, res) => {
    try {
        const pv = await PVRef.findAll(); // Utilisation correcte du modèle be
        if (!pv || pv.length === 0) {
            return res.status(404).json({ message: "Aucun Proces Verbal trouvé" });
        }
        res.status(200).json(pv);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}


const deletePv = async (req, res) => {
    const indexes = req.body.indexes; // Assurez-vous que req.body.indexes contient un tableau d'index d'utilisateurs à supprimer
    try {
        const delete_all_pv = await Promise.all(indexes.map(async (index) => {
            const pv = await PVRef.findOne({
                where: {
                    id_pv: index
                }
            });
            if (!pv) {
                return { index, success: false, message: "Proces Verbal doesn't exist" };
            } else {
                const deletedPv = await PVRef.destroy({
                    where: {
                        id_pv: index
                    }
                });
                if (deletedPv) {
                    return { index, success: true, message: 'Proces verbal deleted' };
                } else {
                    return { index, success: false, message: 'Failed to delete Proces verbal' };
                }
            }
        }));

        res.status(200).json(delete_all_pv);

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

// update user   
const updatePv = async (req, res) => {
    const id = req.params.id
    const data = req.body
    try {

        const pv = await PVRef.findByPk(id);
        if (!pv) {
            return res.status(200).json({ message: "Proces verbal not found" })
        }

        await PVRef.update(data, {
            where: {
                id_pv: id
            }
        });

        res.status(200).json({ message: 'Proces verbal updated' })

    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { addPv, getPv, updatePv, deletePv }