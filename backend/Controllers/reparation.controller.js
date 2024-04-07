const { Reparation, BE } = require('../models/models')
const Equipement = require('../models/equipement.model')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


// post
const add_rep = async (req, res) => {
    const data = req.body;
    try {
        const be_exist = await BE.findByPk(data.id_be);
        if (!be_exist) {
            return res.status(404).json({ message: "Bon d'entrer n'existe pas" })
        }

        const exist = await Reparation.findOne({
            where: {
                [Op.and]: {
                    date_rep: data.date_rep,
                    id_be: data.id_be
                }
            }
        })

        if (exist) {
            return res.status(404).json({ message: "Reparation deja établi" })
        }
        const newRep = await Reparation.create(data);
        res.status(200).json({ newRept });
    } catch (error) {
        console.error("Erreur lors de l'ajout du materiel dans l'inventaire ", error);
        res.status(500).send({ success: false, message: error.message });
    }
}

// get 
const get_rep = async (req, res) => {
    try {
        const rep = await Reparation.findAll();
        if (!rep || rep.length === 0) {
            return res.status(404).json({ message: "Aucune reparation trouvée" });
        }
        res.status(200).json(rep);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const delete_rep = async (req, res) => {
    const indexes = req.body.indexes;
    try {
        const delete_all_rep = await Promise.all(indexes.map(async (index) => {
            const verif_rep = await Reparation.findOne({
                where: {
                    id_rep: index
                }
            });
            if (!verif_rep) {
                return { index, success: false, message: "Reparation doesn't exist" };
            } else {
                const delete_rep = await Reparation.destroy({
                    id_rep: index
                });
                if (delete_rep) {
                    return { index, success: true, message: 'Reparation delete' };
                } else {
                    return { index, success: false, message: 'Failed to delete Reparation' };
                }
            }
        }));
        res.status(200).json(delete_all_rep);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

// update
const update_rep = async (req, res) => {
    const id = req.params.id
    const data = req.body
    try {
        const be_exist = await BE.findByPk(data.id_be);
        if (!be_exist) {
            return res.status(404).json({ message: "Bon d'entrer n'existe pas" })
        }

        const exist = await Reparation.findOne({
            where: {
                id_rep: id
            }
        })

        if (!exist) {
            return res.status(200).json({ message: "Reparation n'existe pas " })
        }

        await Reparation.update(data, {
            where: {
                id_rep: id
            }
        });
        res.status(200).json({ message: 'Reparation updated' })
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { add_rep, get_rep, update_rep, delete_rep }