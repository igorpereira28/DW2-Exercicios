const Sequelize = require('sequelize'),
      database = require("../db/conexao")

const Nacionalidade = database.define('nacionalidade', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },

    pais: {
        type: Sequelize.STRING,
        allowNull: false
    },

    nacionalidade: Sequelize.STRING,

    continente: Sequelize.STRING

}, {
    timestamp: false
})

//comentar pois ele força a criar
// Nacionalidade.sync({force: true})

module.exports = Nacionalidade