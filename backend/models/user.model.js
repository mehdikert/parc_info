
const sequelize = require('../utils/database');
const {
    DataTypes
} = require('sequelize')
const utilisateur = sequelize.define(
    'utilisateur',

    {

        utilisateurs: {

            mat_util: DataTypes.INTEGER(11),

            allowNull: false,

            defaultValue: null,

            primaryKey: true,

            autoIncrement: true,

            comment: null,

            field: "id"

        },

        name: {

            type: DataTypes.STRING(255),

            allowNull: false,

            defaultValue: null,

            primaryKey: false,

            autoIncrement: false,

            comment: null,

            field: "name"

        },



        mail: {

            type: DataTypes.STRING(255),

            allowNull: true,

            defaultValue: null,

            primaryKey: false,

            autoIncrement: false,

            comment: null,

            field: "mail"

        },

        password: {

            type: DataTypes.INTEGER(10),

            allowNull: true,

            defaultValue: null,

            primaryKey: false,

            autoIncrement: false,

            comment: null,

            field: "password"

        },





    }, {

    freezeTableName: true,

    timestamps: false

}

);



module.exports = User;