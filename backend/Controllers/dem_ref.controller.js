const { DemRef, Materiel, PvRef, PVRef } = require('../models/models')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


// post
const addDem_ref = async (req, res) => {
    const data = req.body;
    try {
        const exist = await DemRef.findOne({
            where: {
                [Op.and]: {
                    id_dem_ref: data.id_dem_ref,
                    date_dem_ref: data.date_dem_ref,
                    code_seeal: data.code_seeal,
                    id_pv_ref: data.id_pv_ref
                }
            }
        })
        const mat_exist = await Materiel.findByPk(data.code_seeal);
        const pv_ref_exist = await PVRef.findByPk(data.id_pv_ref);
        if (!mat_exist) {
            return res.status(404).json({ message: "Materiel n'existe pas" })
        }
        if (!pv_ref_exist) {
            return res.status(404).json({ message: "Proces verbal de la reforme n'existe pas" })
        }
        if (exist) {
            return res.status(404).json({ message: "Demande de la reforme deja existante" })
        }
        const newDem_ref = await DemRef.create(data);
        res.status(200).json({ newDem_ref });
    } catch (error) {
        console.error("Erreur lors de l'ajout du pv ", error);
        res.status(500).send({ success: false, message: error.message });
    }
}

// get 
const getDem_ref = async (req, res) => {
    try {
        const dm_ref = await DemRef.findAll(); // Utilisation correcte du modèle be
        if (!dm_ref || dm_ref.length === 0) {
            return res.status(404).json({ message: "Aucune demande de reformes trouvée" });
        }
        res.status(200).json(dm_ref);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const deleteDem_ref = async (req, res) => {
    const indexes = req.body.indexes; // Assurez-vous que req.body.indexes contient un tableau d'index d'utilisateurs à supprimer
    try {
        const delete_all_dm = await Promise.all(indexes.map(async (index) => {
            const dm = await DemRef.findOne({
                where: {
                    id_dem_ref: index
                }
            });
            if (!dm) {
                return { index, success: false, message: "Demande reforme doesn't exist" };
            } else {
                const deletedDm = await DemRef.destroy({
                    where: {
                        id_dem_ref: index
                    }
                });
                if (deletedDm) {
                    return { index, success: true, message: 'Demande reforme deleted' };
                } else {
                    return { index, success: false, message: 'Failed to delete demande reforme' };
                }
            }
        }));
        res.status(200).json(delete_all_dm);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

// update
const updateDem_ref = async (req, res) => {
    const id = req.params.id
    const data = req.body
    try {
        const dm = await DemRef.findByPk(id);
        if (!dm) {
            return res.status(200).json({ message: "Demande reforme not found" })
        }

        await DemRef.update(data, {
            where: {
                id_dem_ref: id
            }
        });
        res.status(200).json({ message: 'Demande reforme updated' })
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { addDem_ref, getDem_ref, updateDem_ref, deleteDem_ref }