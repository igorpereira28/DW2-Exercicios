const Sequelize = require('sequelize'),
      database = require("../db/conexao")

const Usuario = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    sobrenome: Sequelize.STRING,

    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

}, {
    timestamp: false
})

//comentar pois ele força a criar
// Usuario.sync({force: true})

module.exports = Usuario