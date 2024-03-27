
const sequelize = require('../utils/database');
const {
    DataTypes
} = require('sequelize')
const utilisateur = sequelize.define(
    'utilisateurs',

    {

        mat_util: {

            type: DataTypes.INTEGER(11),

            allowNull: false,

            defaultValue: null,

            primaryKey: true,

            autoIncrement: true,

            comment: null,

            field: "mat_util"

        },

        nom: {

            type: DataTypes.TEXT(),

            allowNull: false,

            defaultValue: null,

            primaryKey: false,

            autoIncrement: false,

            comment: null,

            field: "nom"

        },



        prenom: {

            type: DataTypes.TEXT(),

            allowNull: true,

            defaultValue: null,

            primaryKey: false,

            autoIncrement: false,

            comment: null,

            field: "prenom"

        },

        direction: {

            type: DataTypes.TEXT(),

            allowNull: false,

            defaultValue: null,

            primaryKey: false,

            autoIncrement: false,

            comment: null,

            field: "direction"

        },

        departement: {

            type: DataTypes.STRING(50),

            allowNull: true,

            defaultValue: null,

            primaryKey: false,

            autoIncrement: false,

            comment: null,

            field: "departement"

        },

        service: {

            type: DataTypes.STRING(50),

            allowNull: true,

            defaultValue: null,

            primaryKey: false,

            autoIncrement: false,

            comment: null,

            field: "service"

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
        structure: {
            type: DataTypes.INTEGER(20),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "structure"
        },
        wilaya: {
            type: DataTypes.INTEGER(20),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "wilaya"
        },
        bureau_util: {
            type: DataTypes.INTEGER(30),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "bureau_util"
        },
        email: {
            type: DataTypes.STRING(250),
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "email"
        },
        password: {
            type: DataTypes.STRING(250),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "password"
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "username"
        },
        role: {
            type: DataTypes.STRING(5),
            allowNull: false,
            defaultValue: 'user',
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "role"
        }
    }
    , {

        freezeTableName: true,

        timestamps: false

    }

);



module.exports = utilisateur;