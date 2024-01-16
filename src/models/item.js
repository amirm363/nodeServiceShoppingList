const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

// Define the Item model
const Item = sequelize.define('Item', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'items',
    timestamps: false,
});

module.exports = Item;
