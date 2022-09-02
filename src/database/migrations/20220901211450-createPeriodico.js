'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable("periodicos", { 
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      issn: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      anoLancamento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      catalogoId:{ //foreign key
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: {
            tableName: "catalogos",
          },
          key: 'id',
        },
        allowNull: false
      }
    }); 
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable("periodicos");
  }
};
