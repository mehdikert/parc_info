const utilisateurs = require('../models/user.model')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


// post user
const addUser = (req, res) => {
    const data = req.body
    bcrypt.hash(req.body.password, 10).then((hash) => {
        data.password = hash
        try {
            const newuser = utilisateurs.create(data)
            res.status(200).json({ message: "New user added" });
        } catch (error) {
            res.status(404).send({
                success: false,
                message: error.message
            })
        }
    })

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
            const deleteUser = utilisateurs.destroy({
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

module.exports = { addUser, getUsers, getUser, deleteUser, updateUser }