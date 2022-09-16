'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable("alunos", { 
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      matricula: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      dataDeNascimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      mae:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      pai:{
        type: Sequelize.STRING,
        allowNull: true,
      }
        });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable("alunos");
  }
};
