'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("emprestimo", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      emprestimoId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: {
            tableName: 'alunos',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
      funcionarioId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: {
            tableName: 'funcionarios',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
      livroId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: {
            tableName: 'livros',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
      dataEmprestimo: {
        type: Sequelize.DATE,
        allowNull: false
      },
      estimativaEntrega: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("emprestimo");
  }
};
