const sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
sequelize = new Sequelize (proess.env.JAWSDB_URL);
} else {
new Sequelize(proces.env.DB_NAME, process.env.DV_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});
}

module.exports = Sequelize;
