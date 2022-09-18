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
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      autor:{
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
      },
      disponivel: {
        type: Sequelize.BOOLEAN,
			allowNull: false
      },
		  palavraChave: {
        type: Sequelize.STRING,
        allowNull: true,
      }
    }); 
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable("livros");
  }
};
