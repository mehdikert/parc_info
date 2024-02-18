const sequelize = require('../utils/database');
const { DataTypes } = require('sequelize');

const materiel = sequelize.define(
    'materiel',
    {
        code_immo: {
            type: DataTypes.INTEGER(250),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            comment: null,
            field: "code_immo"
        },
        num_serie: {
            type: DataTypes.INTEGER(14),
            allowNull: false,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "num_serie"
        },
        code_seaal: {
            type: DataTypes.STRING(30),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "code_seaal"
        },
        code_barr: {
            type: DataTypes.INTEGER(25),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "code_barr"
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
        annee_d_aquisition: {
            type: DataTypes.DATE(),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "annee_d_aquisition"
        },
        affecte: {
            type: DataTypes.STRING(100),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "affecte"
        },
        etat: {
            type: DataTypes.INTEGER(20),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "etat"
        },
        date_d_inventaire: {
            type: DataTypes.DATE(),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "date_d_inventaire"
        },
        code_reform: {
            type: DataTypes.STRING(11),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "code_reform"
        },
        code_type: {
            type: DataTypes.STRING(250),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "code_type"
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = materiel;
