const { Decharge, Structure, Utilisateur } = require('../models/models')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


// post
const addDech = async (req, res) => {
    const data = req.body;
    try {
        const exist = await Decharge.findOne({
            where: {
                [Op.and]: {
                    id_dech: data.id_dech,
                    date_dech: data.date_dech,
                    id_struc: data.id_struc,
                    id_util: data.id_struc
                }
            }
        })
        const struc_exist = await Structure.findByPk(id_struc);
        const util_exist = await Utilisateur.findByPk(id_util);
        if (!struc_exist) {
            return res.status(404).json({ message: "Structure n'existe pas" })
        }

        if (!util_exist) {
            return res.status(404).json({ message: "Utilisateur n'existe pas" })
        }

        if (exist) {
            return res.status(404).json({ message: "Decharge déjà existant" })
        }
        const newDech = await Decharge.create(data); // Correction ici
        res.status(200).json({ newDech });

    } catch (error) {
        console.error("Erreur lors de l'ajout de la decharge ", error);
        res.status(500).send({ success: false, message: error.message });
    }
}

// get 
const getDech = async (req, res) => {
    try {
        const dech = await Decharge.findAll(); // Utilisation correcte du modèle be
        if (!dech || dech.length === 0) {
            return res.status(404).json({ message: "Aucune decharge trouvé" });
        }
        res.status(200).json(dech);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

//delete
const deleteDech = async (req, res) => {
    const indexes = req.body.indexes; // Assurez-vous que req.body.indexes contient un tableau d'index d'utilisateurs à supprimer
    try {
        const delete_all_dech = await Promise.all(indexes.map(async (index) => {
            const dech = await Decharge.findOne({
                where: {
                    id_dech: index
                }
            });
            if (!dech) {
                return { index, success: false, message: "Decharge doesn't exist" };
            } else {
                const deletedDech = await Decharge.destroy({
                    where: {
                        id_dech: index
                    }
                });
                if (deletedDech) {
                    return { index, success: true, message: 'Decharge deleted' };
                } else {
                    return { index, success: false, message: 'Failed to delete Decharge' };
                }
            }
        }));

        res.status(200).json(delete_all_dech);

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

// update 
const updateDech = async (req, res) => {
    const id = req.params.id
    const data = req.body
    try {
        const dech = await Decharge.findByPk(id);
        if (!dech) {
            return res.status(200).json({ message: "Decharge not found" })
        }

        const struc_exist = await Structure.findByPk(data.id_struc);
        const util_exist = await Utilisateur.findByPk(data.id_util);
        if (!struc_exist) {
            return res.status(404).json({ message: "Structure n'existe pas" })
        }

        if (!util_exist) {
            return res.status(404).json({ message: "Utilisateur n'existe pas" })
        }

        await Decharge.update(data, {
            where: {
                id_dech: id
            }
        });

        res.status(200).json({ message: 'Decharge updated' })

    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { addDech, getDech, updateDech, deleteDech }