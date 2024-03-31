const { Fournisseur } = require('../models/models')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


// post user
const addFour = async (req, res) => {
    const data = req.body;
    try {
        const exist = await Fournisseur.findOne({
            where: {
                nom_four: data.nom_four
            }
        })
        if (exist) {
            return res.status(404).json({ message: "Fournisseur déjà existant" })
        }
        const newFour = await Fournisseur.create(data); // Correction ici
        res.status(200).json({ newFour });
    } catch (error) {
        console.error("Erreur lors de l'ajout du fournisseur :", error);
        res.status(500).send({ success: false, message: error.message });
    }
}

// get users  
const getFours = async (req, res) => {
    try {
        const fournisseurs = await Fournisseur.findAll(); // Utilisation correcte du modèle Fournisseur
        if (!fournisseurs || fournisseurs.length === 0) {
            return res.status(404).json({ message: 'Aucun fournisseur trouvé' }); // Correction du statut de réponse
        }
        res.status(200).json(fournisseurs);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message }); // Correction du statut de réponse
    }
}
// get user  
const getFour = async (req, res) => {
    const index = req.params.id
    try {
        const four = await Fournisseur.findOne({
            where: {
                id_four: index
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
            const four = await Fournisseur.findOne({
                where: {
                    id_four: index
                }
            });
            if (!four) {
                return { index, success: false, message: "Fournisseur(s) doesn't exist" };
            } else {
                const deletedFour = await Fournisseur.destroy({
                    where: {
                        id_four: index
                    }
                });
                if (deletedFour) {
                    return { index, success: true, message: 'Fournisseur(s) deleted' };
                } else {
                    return { index, success: false, message: 'Failed to delete Fournisseur(s)' };
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

        const four = await Fournisseur.findByPk(id);
        if (!four) {
            return res.status(200).json({ message: "Fournisseur not found" })
        }

        await Fournisseur.update(data, {
            where: {
                id_four: id
            }
        });

        res.status(200).json({ message: 'Fournisseur updated' })

    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { addFour, getFours, getFour, updateFour, deleteFours }