'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    queryInterface.createTable('usuarios', { 
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      dataNascimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      nomeMae:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      nomePai:{
        type: Sequelize.STRING,
        allowNull: true,
      }
    });
  },

  down (queryInterface, Sequelize) {
    return queryInterface.dropTable('usuarios');
  }
};
