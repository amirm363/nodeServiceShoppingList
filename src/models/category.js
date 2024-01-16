const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

// Define the Category model
const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'categories',
    timestamps: false,
});

module.exports = Category;
