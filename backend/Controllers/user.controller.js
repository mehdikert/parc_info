const { Utilisateur } = require('../models/models')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


// post user
const addUser = async (req, res) => {
    const data = req.body;
    try {
        const findUser = await Utilisateur.findOne({ where: { username: data.username } })
        if (findUser) {
            return res.status(404).json({ message: "User already exist" })
        }
        const hash = await bcrypt.hash(data.password_util, 10);
        data.password_util = hash;
        const newUser = await Utilisateur.create(data)
        newUser.password = hash;
        res.status(200).json({ newUser });
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).send({ success: false, error: error.message });
    }
}

// get users  
const getUsers = async (req, res) => {
    try {
        const users = await Utilisateur.findAll();
        res.json(users);
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}

const getUserCol = async (req, res) => {
    try {
        // Obtenir les informations sur les colonnes de la table Materiel
        const columns = await Utilisateur.describe();
        res.status(200).json(columns);
    } catch (error) {
        console.error('Error fetching Materiel columns:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


// delete user
const deleteUser = async (req, res) => {
    const index = req.params.id
    try {
        const user = await Utilisateur.findOne({
            where: {
                id_util: index
            }
        });
        if (!user) {
            res.status(200).json({ message: "User doesn't exist" })
        }
        else {
            const deleteUser = await utilisateurs.destroy({
                where: {
                    id_util: index
                }
            })
            if (deleteUser) {
                res.status(200).json({ message: 'user deleted' })
            }
        }
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}

const deleteUsers = async (req, res) => {
    const indexes = req.body.indexes; // Assurez-vous que req.body.indexes contient un tableau d'index d'utilisateurs à supprimer

    try {
        const deletedUsers = await Promise.all(indexes.map(async (index) => {
            const user = await Utilisateur.findOne({
                where: {
                    id_util: index
                }
            });
            if (!user) {
                return { index, success: false, message: "User doesn't exist" };
            } else {
                const deletedUser = await Utilisateur.destroy({
                    where: {
                        id_util: index
                    }
                });
                if (deletedUser) {
                    return { index, success: true, message: 'User deleted' };
                }
            }
        }));

        // Envoyer une seule réponse avec tous les résultats de suppression
        res.status(200).json({ message: "success" });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// update user   
const updateUser = async (req, res) => {
    const id = req.params.id; // Utilisez req.params.id pour récupérer l'identifiant de l'utilisateur
    try {
        const data = req.body;
        // Vérifier si le mot de passe est fourni avant de le hacher
        if (req.body.password_util) {
            bcrypt.hash(req.body.password_util, 10).then(async (hash) => {
                req.body.password_util = hash;
                try {
                    const user = await Utilisateur.findByPk(id); // Utilisez id au lieu de id_util
                    if (!user) {
                        return res.status(200).json({ message: "user not found" })
                    }

                    await Utilisateur.update(data, {
                        where: {
                            id_util: id
                        }
                    });
                    res.status(200).json({ message: 'user updated' })
                } catch (error) {
                    res.status(404).send({
                        success: false,
                        message: error.message
                    })
                }
            });
        } else {
            // Si le mot de passe n'est pas fourni, mettre à jour directement les autres données de l'utilisateur
            try {
                const user = await Utilisateur.findByPk(id); // Utilisez id au lieu de id_util
                if (!user) {
                    return res.status(200).json({ message: "user not found" })
                }

                await Utilisateur.update(data, {
                    where: {
                        id_util: id
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
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}



module.exports = { addUser, getUsers, getUserCol, deleteUser, updateUser, deleteUsers }