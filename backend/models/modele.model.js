const sequelize = require('../utils/database');
const {
    DataTypes
} = require('sequelize')
const modele = sequelize.define(
    'modele',

    {

        id_modele: {

            type: DataTypes.INTEGER(11),

            allowNull: false,

            defaultValue: null,

            primaryKey: true,

            autoIncrement: true,

            comment: null,

            field: "id_interv"

        },

        design_modele: {

            type: DataTypes.STRING(255),

            allowNull: false,

            defaultValue: null,

            primaryKey: false,

            autoIncrement: false,

            comment: null,

            field: "nom_interv"

        },

    }
    , {

        freezeTableName: true,

        timestamps: false

    }

);



module.exports = modele;