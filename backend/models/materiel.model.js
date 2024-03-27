const sequelize = require('../utils/database');
const { DataTypes } = require('sequelize');

const materiel = sequelize.define(
    'materiel',
    {

        num_serie: {
            type: DataTypes.INTEGER(14),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            comment: null,
            field: "num_serie"
        },
        code_immo: {
            type: DataTypes.INTEGER(250),
            allowNull: false,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "code_immo"
        },
        marque: {
            type: DataTypes.STRING(50),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "marque"
        },
        date_aquis: {
            type: DataTypes.DATE(),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "date_aquis"
        },
        date_affect: {
            type: DataTypes.DATE(),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "date_affect"
        },
        etat: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "etat"
        },
        id_modele: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "id_modele"
        },
        matricule: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "matricule"
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = materiel;
