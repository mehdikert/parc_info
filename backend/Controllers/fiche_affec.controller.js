const { FicheAffectation, Structure } = require('../models/models')
const Equipement = require('../models/equipement.model')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


// post
const addFich_affec = async (req, res) => {
    const data = req.body;
    try {
        const exist = await FicheAffectation.findOne({
            where: {
                [Op.and]: {
                    id_struc: data.id_struc,
                    date_debut_affec: data.date_debut_affec,
                    date_fin_affec: data.date_fin_affec
                }
            }
        })
        if (exist) {
            return res.status(404).json({ message: "Fiche affectation déjà existante" })
        }
        const newFich = await FicheAffectation.create(data);
        res.status(200).json({ newFich });
    } catch (error) {
        console.error("Erreur lors de l'ajout de la fiche d'affectation :", error);
        res.status(500).send({ success: false, message: error.message });
    }
}

// get 
const getFich_affec = async (req, res) => {
    try {
        const fich = await FicheAffectation.findAll(); // Utilisation correcte du modèle Fournisseur
        if (!fich || fich.length === 0) {
            return res.status(404).json({ message: 'Aucune fiche affectation trouvé' }); // Correction du statut de réponse
        }
        res.status(200).json(fich);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message }); // Correction du statut de réponse
    }
}

const deleteFich_affec = async (req, res) => {
    const indexes = req.body.indexes; // Assurez-vous que req.body.indexes contient un tableau d'index d'utilisateurs à supprimer
    try {
        const deletedFich = await Promise.all(indexes.map(async (index) => {
            const fich = await FicheAffectation.findOne({
                where: {
                    id_aff: index
                }
            });
            if (!fich) {
                return { index, success: false, message: "Fiche affectation doesn't exist" };
            } else {
                const deletedFich = await FicheAffectation.destroy({
                    where: {
                        id_aff: index
                    }
                });
                if (deletedFich) {
                    return { index, success: true, message: 'Fiche affectation deleted' };
                } else {
                    return { index, success: false, message: 'Failed to delete Fiche affectation' };
                }
            }
        }));

        res.status(200).json(deletedFich);

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

// update 
const updateFich_affec = async (req, res) => {
    const id = req.params.id
    const data = req.body
    try {

        const fich = await FicheAffectation.findByPk(id);
        if (!fich) {
            return res.status(200).json({ message: "Fiche affectation not found" })
        }

        await FicheAffectation.update(data, {
            where: {
                id_aff: id
            }
        });
        res.status(200).json({ message: 'Fiche affectation updated' })
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { addFich_affec, getFich_affec, updateFich_affec, deleteFich_affec }