const sequelize = require('../utils/database');
const { DataTypes } = require('sequelize');

const fournisseur = sequelize.define(
    'fournisseur',
    {

        nom_four: {
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: true,
            autoIncrement: false,
            comment: null,
            field: "nom_four"
        },
        adresse: {
            type: DataTypes.STRING(50),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "adresse"
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = fournisseur;
