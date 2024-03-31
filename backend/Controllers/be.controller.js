const { BE, Materiel } = require('../models/models')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


// post
const addBe = async (req, res) => {
    const data = req.body;
    try {
        const exist = await BE.findOne({
            where: {
                [Op.and]: {
                    id_be: data.id_be,
                    date_entree: data.date_entree,
                    code_seaal: data.code_seaal
                }
            }
        })
        const mat_exist = await Materiel.findByPk(code_seaal);

        if (exist) {
            return res.status(404).json({ message: "Bon d'entrée déjà existant" })
        }
        if (!mat_exist) {
            return res.status(404).json({ message: "Materiel n'existe pas" })
        }
        const newBe = await BE.create(data); // Correction ici
        res.status(200).json({ newBe });
    } catch (error) {
        console.error("Erreur lors de l'ajout du bon d'entrée ", error);
        res.status(500).send({ success: false, message: error.message });
    }
}

// get users  
const getBe = async (req, res) => {
    try {
        const be = await BE.findAll(); // Utilisation correcte du modèle be
        if (!be || be.length === 0) {
            return res.status(404).json({ message: "Aucun Bon d'entrée trouvé" });
        }
        res.status(200).json(be);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}


const deleteBe = async (req, res) => {
    const indexes = req.body.indexes; // Assurez-vous que req.body.indexes contient un tableau d'index d'utilisateurs à supprimer
    try {
        const delete_all_Be = await Promise.all(indexes.map(async (index) => {
            const be = await BE.findOne({
                where: {
                    id_be: index
                }
            });
            if (!be) {
                return { index, success: false, message: "Bon d'entrée doesn't exist" };
            } else {
                const deletedBe = await BE.destroy({
                    where: {
                        id_be: index
                    }
                });
                if (deletedBe) {
                    return { index, success: true, message: 'Bon d\'entrée deleted' };
                } else {
                    return { index, success: false, message: 'Failed to delete Bon d\'entrée' };
                }
            }
        }));

        res.status(200).json(delete_all_Be);

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

// update user   
const updateBe = async (req, res) => {
    const id = req.params.id
    const data = req.body
    try {

        const be = await BE.findByPk(id);
        if (!be) {
            return res.status(200).json({ message: "Bon d'entrée not found" })
        }

        const mat_exist = await Materiel.findByPk(req.body.code_seaal);

        if (!mat_exist) {
            return res.status(404).json({ message: "Materiel n'existe pas" })
        }

        await BE.update(data, {
            where: {
                id_be: id
            }
        });

        res.status(200).json({ message: 'Bon d\'entrée updated' })

    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { addBe, getBe, updateBe, deleteBe }