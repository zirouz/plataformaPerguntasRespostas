const Sequelize = require('sequelize');

const connection = new Sequelize('nomeTabela', 'USER', 'PASSWORD', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;