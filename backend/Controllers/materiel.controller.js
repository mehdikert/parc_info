const materiel = require('../models/materiel.model')

const sequelize = require('../utils/database')
const seq = require('sequelize')


const addMat = async (req, res) => {
    const data = req.body
    try {
        const newMat = await materiel.create(data)
        res.status(200).json({ message: "New materiel added" });
    } catch (error) {
        res.status(400).send({
            success: false,
            message: error.message
        })
    }
}


const getMats = async (req, res) => {

    try {
        const data = await materiel.findAll();
        if (!data) {
            return res.status(400).json({ message: "materiel not found" })
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
        console.log(error);
    }
}

const getMat = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await materiel.findOne({
            where: {
                num_serie: id
            }
        });
        if (!data) {
            return res.json({ message: "materiel not found" })
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}



const deleteMats = async (req, res) => {
    const indexes = req.body.indexes; // Assurez-vous que req.body.indexes contient un tableau d'index d'utilisateurs à supprimer
    try {
        const deletedMateriels = await Promise.all(indexes.map(async (index) => {
            const mat = await materiel.findOne({
                where: {
                    num_serie: index
                }
            });
            if (!mat) {
                return { index, success: false, message: `Materiel ${index} not found` };
            } else {
                const deletedUser = await materiel.destroy({
                    where: {
                        num_serie: index
                    }
                });
                if (deletedUser) {
                    return { index, success: true, message: 'Materiel deleted' };
                } else {
                    return { index, success: false, message: 'Failed to delete materiel' };
                }
            }
        }));

        // Envoie de la réponse après avoir supprimé tous les matériels
        res.status(200).json(deletedMateriels);

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

const updateMat = async (req, res) => {
    const id = req.params.id
    try {
        const data = req.body;
        const user = await materiel.findByPk(id);
        if (!user) {
            return res.status(200).json({ meessage: "user not found" })
        }

        await materiel.update(data, {
            where: {
                num_serie: id
            }
        });
        res.status(200).json({ message: 'user updated' })
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { addMat, getMats, getMat, deleteMats, updateMat }