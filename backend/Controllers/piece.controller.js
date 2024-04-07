const { Piece } = require('../models/models')
const Equipement = require('../models/equipement.model')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


// post
const add_piece = async (req, res) => {
    const data = req.body;
    try {
        const newPiece = await Piece.create(data);
        res.status(200).json({ newPiece });
    } catch (error) {
        console.error("Erreur lors de l'ajout de la piece", error);
        res.status(500).send({ success: false, message: error.message });
    }
}

// get 
const get_piece = async (req, res) => {
    try {
        const piece = await Piece.findAll(); // Utilisation correcte du modèle be
        if (!piece || piece.length === 0) {
            return res.status(404).json({ message: "Aucune piece trouvée" });
        }
        res.status(200).json(piece);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const delete_piece = async (req, res) => {
    const indexes = req.body.indexes;
    try {
        const delete_all_piece = await Promise.all(indexes.map(async (index) => {
            const piece = await Piece.findOne({
                where: {
                    id_piece: index
                }
            });
            if (!piece) {
                return { index, success: false, message: "Piece doesn't exist" };
            } else {
                const deletePiece = await Piece.destroy({
                    id_piece: index
                });
                if (deletePiece) {
                    return { index, success: true, message: 'Piece supprimer de l\'inventaire' };
                } else {
                    return { index, success: false, message: 'Failed to delete piece de l\'inventaire' };
                }
            }
        }));
        res.status(200).json(delete_all_piece);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

// update
const update_piece = async (req, res) => {
    const id = req.params.id
    const data = req.body
    try {

        const exist = await InvMat.findOne({
            where: {
                id_piece: id
            }
        })

        if (!exist) {
            return res.status(200).json({ message: "Piece n'existe pas " })
        }

        await Piece.update(data, {
            where: {
                id_piece: id
            }
        });
        res.status(200).json({ message: 'Piece updated' })
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { add_piece, get_piece, update_piece, delete_piece }