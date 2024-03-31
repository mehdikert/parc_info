const sequelize = require('../utils/database');
const { DataTypes } = require('sequelize');


const Equipement = sequelize.define('equipement', {
    id_equip: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_equip"
    },
    design_equip: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "design_equip"
    },
    num_serie: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "num_serie"
    },
    prix_equip: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
        field: "prix_equip"
    }
}, {
    timestamps: false,
    freezeTableName: true,
});


module.exports = Equipement; 