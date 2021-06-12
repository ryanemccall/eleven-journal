const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:99cb4fbb1a3c490abc4322e217f500e5@localhost:5432/eleven-journal");

module.exports = sequelize;
