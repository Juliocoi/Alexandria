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
      usuarioId:{ //foreign key
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: {
            tableName: "usuarios",
          },
          key: 'id',
        },
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable("alunos");
  }
};
