'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable("livros", { 
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      isbn: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      autor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      anoLancamento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      coAutor: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      catalogoId:{ //foreign key
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: {
            tableName: "catalogos",
            schema: "schema"
          },
          key: 'id',
        },
        allowNull: false
      }
    }); 
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable("livros");
  }
};
