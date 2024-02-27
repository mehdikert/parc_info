const sequelize = require('../utils/database');
const {
    DataTypes
} = require('sequelize')
const decharge = sequelize.define(
    'decharge',

    {

        code_dech: {

            type: DataTypes.STRING(14),

            allowNull: false,

            defaultValue: null,

            primaryKey: true,

            autoIncrement: true,

            comment: null,

            field: "code_dech"

        },

        date_dech: {

            type: DataTypes.DATE(),

            allowNull: false,

            defaultValue: null,

            primaryKey: false,

            autoIncrement: false,

            comment: null,

            field: "date_dech"

        },



        probleme: {

            type: DataTypes.STRING(255),

            allowNull: false,

            defaultValue: null,

            primaryKey: false,

            autoIncrement: false,

            comment: null,

            field: "probleme"

        },

        id_four: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "id_four"
        },
        num_serie: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            field: "num_serie"
        }
    }
    , {

        freezeTableName: true,

        timestamps: false

    }

);



module.exports = decharge;