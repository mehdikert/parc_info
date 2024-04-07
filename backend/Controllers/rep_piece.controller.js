const { Reparation, Piece, RepPiece } = require('../models/models')
const Equipement = require('../models/equipement.model')
const bcrypt = require('bcrypt')
const sequelize = require('../utils/database')
const seq = require('sequelize')


// post
const add_rep_piece = async (req, res) => {
    const data = req.body;
    try {

        const rep_exist = await Reparation.findByPk(data.id_rep)
        if (rep_exist) {
            return res.status(404).json({ message: "Reparation existe pas" })
        }

        const piece_exist = await Piece.findByPk(data.id_piece)
        if (piece_exist) {
            return res.status(404).json({ message: "Piece existe pas" })
        }
        const exist = await RepPiece.findOne({
            where: {
                [Op.and]: {
                    id_rep: data.id_rep,
                    id_piece: data.id_piece
                }
            }
        })

        if (exist) {
            return res.status(404).json({ message: "Piece deja reparer" })
        }
        const newRep = await RepPiece.create(data);
        res.status(200).json({ newRep });
    } catch (error) {
        console.error("Erreur lors de la reparation de la piece ", error);
        res.status(500).send({ success: false, message: error.message });
    }
}

// get 
const get_rep_piece = async (req, res) => {
    try {
        const rep = await RepPiece.findAll();
        if (!rep || rep.length === 0) {
            return res.status(404).json({ message: "Aucune piece reparer trouvée" });
        }
        res.status(200).json(rep);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const delete_rep_piece = async (req, res) => {
    const indexes = req.body.indexes;
    try {
        const delete_all_rep = await Promise.all(indexes.map(async (index) => {

            const verif_rep = await RepPiece.findOne({
                where: {
                    [Op.and]: {
                        id_rep: index.id_rep,
                        id_piece: index.id_piece
                    }
                }
            });

            if (!verif_rep) {
                return { index, success: false, message: "Piece reparer doesn't exist" };
            } else {
                const delete_rep = await RepPiece.destroy({
                    where: {
                        [Op.and]: {
                            id_rep: index.id_rep,
                            id_piece: index.id_piece
                        }
                    }
                });

                if (delete_rep) {
                    return { index, success: true, message: 'piece reparer delete' };
                } else {
                    return { index, success: false, message: 'Failed to delete piece reparer' };
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
const update_rep_piece = async (req, res) => {
    const id = req.params
    const data = req.body
    try {

        const exist = await RepPiece.findOne({
            where: {
                [Op.and]: {
                    id_rep: id.id_rep,
                    id_piece: id.id_piece
                }
            }
        })

        if (!exist) {
            return res.status(200).json({ message: "Piece reparer n'existe pas " })
        }


        const rep_exist = await Reparation.findByPk(data.id_rep)
        if (rep_exist) {
            return res.status(404).json({ message: "Reparation existe pas" })
        }

        const piece_exist = await Piece.findByPk(data.id_piece)
        if (piece_exist) {
            return res.status(404).json({ message: "Piece existe pas" })
        }

        await RepPiece.update(data, {
            where: {
                [Op.and]: {
                    id_rep: id.id_rep,
                    id_piece: id.id_piece
                }
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


module.exports = { add_rep_piece, get_rep_piece, update_rep_piece, delete_rep_piece }