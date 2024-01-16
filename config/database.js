const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

// Create a new Sequelize instance
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.RDS_ENDPOINT,
        port: process.env.RDS_PORT,
        dialect: 'mysql'
    }
);

module.exports = sequelize;
