const sequelize = require('../utils/database');
const { DataTypes } = require('sequelize');

const be = sequelize.define(
    'be',
    {

        id_be: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: false,
            comment: null,
            field: "id_be"
        },
        date_entr: {
            type: DataTypes.DATE(),
            allowNull: false,
            primaryKey: false,
            autoIncrement: true,
            comment: null,
            field: "date_entr"
        },
        probleme: {
            type: DataTypes.STRING(255),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "probleme"
        },
        matricule: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "matricule"
        },
        nume_serie: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "num_serie"
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = be;
