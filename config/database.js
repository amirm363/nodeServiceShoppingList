const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

// const sequelize = new Sequelize(
//     "shoppinglist",
//     "amirmeisner",
//     "amirm363",
//     {
//         host: 'shoppinglist.coo8a2vfng65.us-east-1.rds.amazonaws.com',
//         port: "3306",
//         dialect: 'mysql',
//         logging: console.log,
//     }
// );
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
