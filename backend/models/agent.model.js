const sequelize = require('../utils/database');
const {
    DataTypes
} = require('sequelize')
const agent = sequelize.define(
    'agent',

    {

        matricule: {

            type: DataTypes.INTEGER(11),

            allowNull: false,

            defaultValue: null,

            primaryKey: true,

            autoIncrement: true,

            comment: null,

            field: "matricule"

        },

        nom_agent: {

            type: DataTypes.STRING(50),

            allowNull: false,

            defaultValue: null,

            primaryKey: false,

            autoIncrement: false,

            comment: null,

            field: "nom_agent"

        },



        prenom_agent: {

            type: DataTypes.STRING(50),

            allowNull: true,

            defaultValue: null,

            primaryKey: false,

            autoIncrement: false,

            comment: null,

            field: "prenom_agent"

        },

        fonction_agent: {
            type: DataTypes.STRING(100),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "fonction_agent"
        },
        code_structure: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "code_structure"
        }
    }
    , {

        freezeTableName: true,

        timestamps: false

    }

);



module.exports = agent;