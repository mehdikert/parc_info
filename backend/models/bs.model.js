const sequelize = require('../utils/database');
const { DataTypes } = require('sequelize');

const bs = sequelize.define(
    'bs',
    {

        id_bs: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: false,
            comment: null,
            field: "id_bs"
        },
        date_sort: {
            type: DataTypes.DATE(),
            allowNull: false,
            primaryKey: false,
            autoIncrement: true,
            comment: null,
            field: "date_sort"
        },
        id_be: {
            type: DataTypes.STRING(255),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "id_be"
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = bs;
