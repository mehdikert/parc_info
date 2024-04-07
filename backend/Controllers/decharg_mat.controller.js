const { Decharge, Materiel, DechargeMat } = require('../models/models')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


// post
const addDech_mat = async (req, res) => {
    const data = req.body;
    try {
        const exist = await DechargeMat.findOne({
            where: {
                [Op.and]: {
                    id_dech: data.id_dech,
                    code_seeal: data.code_seeal
                }
            }
        })
        const mat_exist = await Materiel.findByPk(code_seeal);
        const dech_exist = await Decharge.findByPk(id_dech);
        if (!mat_exist) {
            return res.status(404).json({ message: "Materiel n'existe pas" })
        }

        if (!dech_exist) {
            return res.status(404).json({ message: "Decharge n'existe pas" })
        }

        if (exist) {
            return res.status(404).json({ message: "Decharge déjà existante au materiel" })
        }

        const newDech_mat = await DechargeMat.create(data); // Correction ici
        res.status(200).json({ newDech_mat });

    } catch (error) {
        console.error("Erreur lors de l'ajout de la decharge ", error);
        res.status(500).send({ success: false, message: error.message });
    }
}

// get 
const getDech_mat = async (req, res) => {
    try {
        const dechMat = await DechargeMat.findAll(); // Utilisation correcte du modèle be
        if (!dechMat || dechMat.length === 0) {
            return res.status(404).json({ message: "Aucune decharge trouvé" });
        }
        res.status(200).json(dechMat);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

//delete
const deleteDech_mat = async (req, res) => {
    const indexes = req.body.indexes; // Assurez-vous que req.body.indexes contient un tableau d'index d'utilisateurs à supprimer
    try {
        const delete_all_dechMat = await Promise.all(indexes.map(async (index) => {
            const dechMat = await DechargeMat.findOne({
                where: {
                    [Op.and]: {
                        code_seeal: index.code_seeal,
                        id_dech: index.id_dech
                    }
                }
            });
            if (!dechMat) {
                return { index, success: false, message: "Decharge du materiel doesn't exist " };
            } else {
                const deletedDech = await DechargeMat.destroy({
                    where: {
                        [Op.and]: {
                            code_seeal: index.code_seeal,
                            id_dech: index.id_dech
                        }
                    }
                });

                if (deletedDech) {
                    return { index, success: true, message: 'Decharge du materiel deleted' };
                } else {
                    return { index, success: false, message: 'Failed to delete la Decharge du materiel' };
                }
            }
        }));

        res.status(200).json(delete_all_dechMat);

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

// update 
const updateDech_mat = async (req, res) => {
    const id = req.params.id
    const data = req.body
    try {

        const exist = await DechargeMat.findOne({
            where: {
                [Op.and]: {
                    id_dech: data.id_dech,
                    code_seeal: data.code_seeal
                }
            }
        })
        const mat_exist = await Materiel.findByPk(data.code_seeal);
        const dech_exist = await Decharge.findByPk(data.id_dech);

        if (!mat_exist) {
            return res.status(404).json({ message: "Materiel n'existe pas" })
        }

        if (!dech_exist) {
            return res.status(404).json({ message: "Decharge n'existe pas" })
        }

        if (!exist) {
            return res.status(404).json({ message: "Decharge innéxistante au materiel" })
        }

        await Decharge.update(data, {
            where: {
                [Op.and]: {
                    id_dech: data.id_dech,
                    code_seeal: data.code_seeal
                }
            }
        });

        res.status(200).json({ message: 'la decharge du materiel updated' })

    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { addDech_mat, getDech_mat, updateDech_mat, deleteDech_mat }