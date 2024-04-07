const { BS, Fournisseur, BE } = require('../models/models')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


// post
const addBs = async (req, res) => {
    const data = req.body;
    try {
        const exist = await BS.findOne({
            where: {
                [Op.and]: {
                    id_bs: data.id_bs,
                    date_sortie: data.date_sortie,
                    id_four: data.id_four,
                    id_be: data.id_be
                }
            }
        })

        const four_exist = await Fournisseur.findByPk(id_four);
        if (!four_exist) {
            return res.status(404).json({ message: "Fournisseur n'existe pas" })
        }

        const be_exist = await BE.findByPk(id_be);
        if (!be_exist) {
            return res.status(404).json({ message: "Bon d'entrée n'existe pas" })
        }
        if (exist) {
            return res.status(404).json({ message: "Bon de sortie déjà existant" })
        }
        const newBS = await BS.create(data); // Correction ici
        res.status(200).json({ newBS });
    } catch (error) {
        console.error("Erreur lors de l'ajout du bon de sortie ", error);
        res.status(500).send({ success: false, message: error.message });
    }
}

// get
const getBs = async (req, res) => {
    try {
        const bs = await BS.findAll();
        res.status(200).json(bs);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// delete
const deleteBs = async (req, res) => {
    const indexes = req.body.indexes; // Assurez-vous que req.body.indexes contient un tableau d'index d'utilisateurs à supprimer
    try {
        const delete_all_Bs = await Promise.all(indexes.map(async (index) => {
            const bs = await BS.findOne({
                where: {
                    id_bs: index
                }
            });
            if (!bs) {
                return { index, success: false, message: "Bon de sortie doesn't exist" };
            } else {
                const deletedBs = await BS.destroy({
                    where: {
                        id_bs: index
                    }
                });
                if (deletedBs) {
                    return { index, success: true, message: 'Bon de sortie deleted' };
                } else {
                    return { index, success: false, message: 'Failed to delete Bon de sortie' };
                }
            }
        }));

        res.status(200).json(delete_all_Bs);

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

// update 
const updateBs = async (req, res) => {
    const id = req.params.id
    const data = req.body

    try {
        const four_exist = await Fournisseur.findByPk(id_four);
        if (!four_exist) {
            return res.status(404).json({ message: "Fournisseur n'existe pas" })
        }

        const be_exist = await BE.findByPk(id_be);
        if (!be_exist) {
            return res.status(404).json({ message: "Bon d'entrée n'existe pas" })
        }

        await BS.update(data, {
            where: {
                id_bs: id
            }
        });

        res.status(200).json({ message: 'Bon de sortie updated' })

    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { addBs, getBs, updateBs, deleteBs }