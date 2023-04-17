const Sequelize = require('sequelize'),
      databaseConfig = require("../config/database"),
      conexao = new Sequelize(databaseConfig)

module.exports = conexao