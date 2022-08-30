'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("catalogos", {
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
      edicao: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      editora: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estante: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable("catalogos");     
  }
};
