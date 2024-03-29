const utilisateurs = require('../models/user.model')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


// post user
const addUser = async (req, res) => {
    const data = req.body;
    try {
        const hash = await bcrypt.hash(data.password, 10);
        data.password = hash;
        const newUser = await utilisateurs.create(data)
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
        const users = await utilisateurs.findAll();
        res.json(users);
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}

// get user  
const getUser = async (req, res) => {
    const index = req.params.id
    try {
        const user = await utilisateurs.findOne({
            where: {
                mat_util: index
            }
        });
        if (!user) {
            res.status(200).json({ message: "User doesn't exist" })
        }
        res.status(200).json(user)
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

// delete user
const deleteUser = async (req, res) => {
    const index = req.params.id
    try {
        const user = await utilisateurs.findOne({
            where: {
                mat_util: index
            }
        });
        if (!user) {
            res.status(200).json({ message: "User doesn't exist" })
        }
        else {
            const deleteUser = await utilisateurs.destroy({
                where: {
                    mat_util: index
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
            const user = await utilisateurs.findOne({
                where: {
                    mat_util: index
                }
            });
            if (!user) {
                return { index, success: false, message: "User doesn't exist" };
            } else {
                const deletedUser = await utilisateurs.destroy({
                    where: {
                        mat_util: index
                    }
                });
                if (deletedUser) {
                    return { index, success: true, message: 'User deleted' };
                } else {
                    return { index, success: false, message: 'Failed to delete user' };
                }
            }
        }));

        res.status(200).json(deletedUsers);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};
// update user   
const updateUser = async (req, res) => {
    const id = req.params.id
    try {
        const data = req.body;
        bcrypt.hash(req.body.password, 10).then(async (hash) => {
            req.body.password = hash;
            try {

                const user = await utilisateurs.findByPk(id);
                if (!user) {
                    return res.status(200).json({ meessage: "user not found" })
                }

                await utilisateurs.update(data, {
                    where: {
                        mat_util: id
                    }
                });
                res.status(200).json({ message: 'user updated' })
            } catch (error) {

                res.status(404).send({
                    success: false,
                    message: error.message
                })
            }
        })

    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = { addUser, getUsers, getUser, deleteUser, updateUser, deleteUsers }