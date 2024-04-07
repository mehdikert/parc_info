const { InvMat, Inventaire, Materiel } = require('../models/models')
const Equipement = require('../models/equipement.model')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


// post
const add_InvMat = async (req, res) => {
    const data = req.body;
    try {
        const exist = await InvMat.findOne({
            where: {
                [Op.and]: {
                    id_inv: data.id_inv,
                    code_seeal: data.code__seeal
                }
            }
        })
        const mat_exist = await Materiel.findByPk(data.code_seeal);
        const inv_exist = await Inventaire.findByPk(data.id_inv);
        if (!mat_exist) {
            return res.status(404).json({ message: "Materiel n'existe pas" })
        }
        if (!inv_exist) {
            return res.status(404).json({ message: "Inventaire n'existe pas" })
        }
        if (exist) {
            return res.status(404).json({ message: "Materiel deja existant dans l'inventaire" })
        }
        const newInv_mat = await InvMat.create(data);
        res.status(200).json({ newInv_mat });
    } catch (error) {
        console.error("Erreur lors de l'ajout du materiel dans l'inventaire ", error);
        res.status(500).send({ success: false, message: error.message });
    }
}

// get 
const get_InvMat = async (req, res) => {
    try {
        const inv_mat = await InvMat.findAll(); // Utilisation correcte du modèle be
        if (!inv_mat || inv_mat.length === 0) {
            return res.status(404).json({ message: "Aucun materiel dans aucun inventaire trouvée" });
        }
        res.status(200).json(inv_mat);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const delete_InvMat = async (req, res) => {
    const indexes = req.body.indexes;
    try {
        const delete_all_invmat = await Promise.all(indexes.map(async (index) => {
            const invMat = await InvMat.findOne({
                where: {
                    [Op.and]: {
                        id_inv: index.id_inv,
                        code_seeal: index.code_seeal
                    }
                }
            });
            if (!invMat) {
                return { index, success: false, message: "doesn't exist" };
            } else {
                const deleteInvMat = await InvMat.destroy({
                    [Op.and]: {
                        id_inv: index.id_inv,
                        code_seeal: index.code_seeal
                    }
                });
                if (deleteInvMat) {
                    return { index, success: true, message: 'Materiel supprimer de l\'inventaire' };
                } else {
                    return { index, success: false, message: 'Failed to delete materiel de l\'inventaire' };
                }
            }
        }));
        res.status(200).json(delete_all_invmat);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

// update
const update_InvMat = async (req, res) => {
    const id = req.params
    const data = req.body
    try {

        const exist = await InvMat.findOne({
            where: {
                [Op.and]: {
                    id_inv: id.id_inv,
                    code_seeal: id.code_seeal
                }
            }
        })

        if (!exist) {
            return res.status(200).json({ message: "Materiel n'existe pas dans l'inventaire" })
        }

        await InvMat.update(data, {
            where: {
                [Op.and]: {
                    id_inv: id.id_inv,
                    code_seeal: id.code_seeal
                }
            }
        });
        res.status(200).json({ message: 'materiel and inventaire updated' })
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { add_InvMat, get_InvMat, update_InvMat, delete_InvMat }