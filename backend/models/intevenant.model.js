const sequelize = require('../utils/database');
const {
    DataTypes
} = require('sequelize')
const intervenant = sequelize.define(
    'intervenant',

    {

        id_interv: {

            type: DataTypes.INTEGER(11),

            allowNull: false,

            defaultValue: null,

            primaryKey: true,

            autoIncrement: true,

            comment: null,

            field: "id_interv"

        },

        nom_interv: {

            type: DataTypes.STRING(50),

            allowNull: false,

            defaultValue: null,

            primaryKey: false,

            autoIncrement: false,

            comment: null,

            field: "nom_interv"

        },



        prenom_interv: {

            type: DataTypes.STRING(50),

            allowNull: true,

            defaultValue: null,

            primaryKey: false,

            autoIncrement: false,

            comment: null,

            field: "prenom_agent"

        },

    }
    , {

        freezeTableName: true,

        timestamps: false

    }

);



module.exports = agent;