const sequelize = require('../utils/database');
const { DataTypes } = require('sequelize');

const structure = sequelize.define(
    'structure',
    {

        code_structure: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: false,
            comment: null,
            field: "code_structure"
        },
        nom_structure: {
            type: DataTypes.STRING(100),
            allowNull: false,
            primaryKey: false,
            autoIncrement: true,
            comment: null,
            field: "nom_structure"
        },
        site: {
            type: DataTypes.STRING(100),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "site"
        },
        wilaya: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "wilaya"
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = structure;
