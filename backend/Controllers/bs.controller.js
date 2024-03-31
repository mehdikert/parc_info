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

        const be_exist = await BE.findByPk(id_four);
        if (!four_exist) {
            return res.status(404).json({ message: "Fournisseur n'existe pas" })
        }
        if (exist) {
            return res.status(404).json({ message: "Bon de livraison déjà existant" })
        }
        const newBL = await BL.create(data); // Correction ici
        res.status(200).json({ newBL });
    } catch (error) {
        console.error("Erreur lors de l'ajout du bon d'entrée ", error);
        res.status(500).send({ success: false, message: error.message });
    }
}

// get users  
const getBL = async (req, res) => {
    try {
        const bl = await BL.findAll(); // Utilisation correcte du modèle be
        if (!bl || bl.length === 0) {
            return res.status(404).json({ message: "Aucun Bon de livraison trouvé" });
        }
        res.status(200).json(bl);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}


const deleteBL = async (req, res) => {
    const indexes = req.body.indexes; // Assurez-vous que req.body.indexes contient un tableau d'index d'utilisateurs à supprimer
    try {
        const delete_all_BL = await Promise.all(indexes.map(async (index) => {
            const bl = await BL.findOne({
                where: {
                    id_bl: index
                }
            });
            if (!bl) {
                return { index, success: false, message: "Bon de livraison doesn't exist" };
            } else {
                const deletedBL = await BL.destroy({
                    where: {
                        id_bl: index
                    }
                });
                if (deletedBL) {
                    return { index, success: true, message: 'Bon de livraison deleted' };
                } else {
                    return { index, success: false, message: 'Failed to delete Bon de livraion' };
                }
            }
        }));

        res.status(200).json(delete_all_BL);

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

// update user   
const updateBL = async (req, res) => {
    const id = req.params.id
    const data = req.body
    try {

        const bl = await BL.findByPk(id);
        if (!bl) {
            return res.status(200).json({ message: "Bon de livraison not found" })
        }

        const four_exist = await Fournisseur.findByPk(req.body.id_four);

        if (!four_exist) {
            return res.status(404).json({ message: "Fournisseur n'existe pas" })
        }

        await BL.update(data, {
            where: {
                id_bl: id
            }
        });

        res.status(200).json({ message: 'Bon de livraison updated' })

    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { addBL, getBL, updateBL, deleteBL }