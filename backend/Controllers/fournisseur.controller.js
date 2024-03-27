const fourni = require('../models/fournisseur.model')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


// post user
const addFour = async (req, res) => {
    const data = req.body;
    try {
        const newFour = await fourni.create(data)
        res.status(200).json({ newFour });

    } catch (error) {
        console.error("Error adding fournisseur :", error);
        res.status(500).send({ success: false, message: error.message });
    }
}

// get users  
const getFours = async (req, res) => {
    try {
        const four = await fourni.findAll()
        if (!four) {
            res.status(400).json({ message: 'Fournisseurs Not found' })
        }
        res.status(200).json(four);

    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}

// get user  
const getFour = async (req, res) => {
    const index = req.params.id
    try {
        const four = await fourni.findOne({
            where: {
                nom_four: index
            }
        });
        if (!four) {
            res.status(200).json({ message: index + " doesn't exist" })
        }
        res.status(200).json(four)
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}

// filtred user 
/*
const filtred_user = async (req, res, key) => {
    const key = req.body.filterKey
    const { nom, prenom, direction, department, site, structure, wilaya, email, username } = req.body
    try {
        const filter = await utilisateurs.findAll({
            where: {
                [seq.or]:
                    [
                        { nom: { [seq.like]: `%${key}%` } },
                        { prenom: { [seq.like]: `%${key}%` } },
                        { direction: { [seq.like]: `%${key}%` } },
                        { department: { [seq.like]: `%${key}%` } },
                        { site: { [seq.like]: `%${key}%` } },
                        { structure: { [seq.like]: `%${key}%` } },
                        { wilaya: { [seq.like]: `%${key}%` } },
                        { email: { [seq.like]: `%${key}%` } },
                        { username: { [seq.like]: `%${key}%` } }
                    ]
            }
        })
        res.status(200).json(filter)
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}
*/



const deleteFours = async (req, res) => {
    const indexes = req.body.indexes; // Assurez-vous que req.body.indexes contient un tableau d'index d'utilisateurs à supprimer
    try {
        const deletedFours = await Promise.all(indexes.map(async (index) => {
            const four = await fourni.findOne({
                where: {
                    nom_four: index
                }
            });
            if (!four) {
                return { index, success: false, message: index + " doesn't exist" };
            } else {
                const deletedFour = await fourni.destroy({
                    where: {
                        nom_four: index
                    }
                });
                if (deletedFour) {
                    return { index, success: true, message: index + ' deleted' };
                } else {
                    return { index, success: false, message: 'Failed to delete fournisseur' };
                }
            }
        }));

        res.status(200).json(deletedFours);

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};
// update user   
const updateFour = async (req, res) => {
    const id = req.params.id
    const data = req.body
    try {

        const four = await fourni.findByPk(id);
        if (!four) {
            return res.status(200).json({ message: "Fournisseur not found" })
        }

        await fourni.update(data, {
            where: {
                nom_four: id
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

module.exports = { addFour, getFours, getFour, updateFour, deleteFours }